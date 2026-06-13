# Monetization architecture (design notes — NOT built yet)

> Status: **forward-looking design only.** Atlas is currently free ("free for the
> initial phase"). Nothing here is implemented. This captures the architecture so
> tiered pricing can be picked up later without re-deriving it.

## TL;DR
- The hard part of monetization is **not payments** — it's moving the **trust
  boundary server-side**. Today every tier decision is client-side and the
  `tier` field is **forgeable**.
- The **stable core** is an **entitlement store + server-side enforcement**. The
  **payment mechanism is pluggable** on top of it.
- **Recommended first move:** yearly **license codes** via a **Merchant-of-Record**
  (Lemon Squeezy / Paddle / Gumroad) — least to build, parent-friendly (no surprise
  renewals), offloads VAT. Auto-renew Stripe subscriptions can be added later as a
  second "writer" into the same entitlement store with zero rework to enforcement.

---

## 1. The principle that drives everything
Free-product gating can live in the browser (it's advisory UX). **Paid gating
cannot** — a user can open devtools and flip it. So once money is involved:

- **Server enforces entitlement. Client is UX only** (show/hide, lock badges, upsell).

## 2. Current state & the gap
Atlas already has a `tier` field, but it is **client-controlled and forgeable**:

- `netlify/functions/save-progress.mjs` does `tier: body.tier || "free"` — the
  browser sends its own tier and the server stores it verbatim. A user could
  `PUT {tier:"plus"}` and self-upgrade.
- The LLM functions (`evaluate-comprehension.mjs`, `evaluate-writing.mjs`,
  `evaluate-extended.mjs`) authenticate via `verifyUserId` but **do not check
  tier** — and they are the real **cost centre** (Anthropic tokens per call).

**Must-do regardless of payment model:** stop trusting the client `tier`;
entitlement comes from a server-only store written by the payment/redeem flow.

## 3. The stable core — entitlement store + enforcement (shared by ALL models)

### 3a. Entitlement store (server-only; client cannot write)
A second Netlify Blobs store, written **only** by the payment webhook / license
redeem function:

```js
getStore("entitlements")  // key: user_${userId}
{
  tier: "plus",                  // free | plus | family
  status: "active",              // active | trialing | past_due | canceled | expired
  source: "license",             // license | stripe   (which writer set it)
  expiresAt: "2027-06-13",       // access until this date
  seats: 3,                      // Family / multi-child cap
  stripeCustomerId: "cus_…",     // only for the subscription model
  updatedAt: "…"
}
```
Keep `tier` in the `user-progress` blob for UI convenience, but **never enforce on
it** — enforcement reads `entitlements`.

### 3b. Shared helper — `netlify/lib/entitlement.mjs` (skeleton)
```js
import { getStore } from "@netlify/blobs";

const TIER_RANK = { free: 0, plus: 1, family: 2 };

export async function getEntitlement(userId) {
  const ent = await getStore("entitlements").get(`user_${userId}`, { type: "json" });
  if (!ent) return { tier: "free", status: "active" };
  // expiry check — an expired paid plan falls back to free
  if (ent.expiresAt && new Date(ent.expiresAt) < new Date()) {
    return { ...ent, tier: "free", status: "expired" };
  }
  return ent;
}

// throw-style guard for use inside gated functions
export async function requireTier(userId, minTier) {
  const ent = await getEntitlement(userId);
  const ok = TIER_RANK[ent.tier] >= TIER_RANK[minTier]
    && ["active", "trialing", "past_due"].includes(ent.status); // past_due = grace
  return ok ? ent : null;
}
```

### 3c. Gated function pattern (e.g. the AI markers)
```js
const userId = await verifyUserId(req.headers.get("authorization"));
if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

if (!(await requireTier(userId, "plus"))) {
  return Response.json({ error: "Upgrade required" }, { status: 402 });
}
// …then do the (costly) work
```

### 3d. Declarative entitlement map (ONE source of truth, both client + server)
```js
// shared module imported by client (UX) AND server (enforcement)
export const ENTITLEMENTS = {
  lessons:          "free",
  flashcards:       "free",
  basicQuizzes:     "free",
  aiMarking:        "plus",   // evaluate-* functions
  mockExams:        "plus",
  benchmarkHistory: "plus",
  multiChild:       "family",
};
```
Client reads it → lock badges / hide paid UI / upsell. Server reads the **same**
map → `requireTier`. Prevents client/server drift.

### 3e. Usage metering / quotas (the LLM cost guard)
A tier check isn't enough for the AI markers — a paid user (or leaked token) can
run up the Anthropic bill. Add per-tier **monthly quotas** in a `usage` store
(`user_${userId}_${yyyymm} -> { aiMarks: n }`), incremented + checked server-side
before each costly call. This is its own component, independent of which payment
model you choose.

---

## 4. Payment model A — yearly license codes (RECOMMENDED FIRST)

### Flow
1. Parent pays on a hosted checkout ("the main site").
2. A license code is generated and emailed (`ATLAS-XXXX-XXXX-XXXX`).
3. Parent pastes it into Atlas → **redeem** → unlocked for 365 days.
4. Renewal = buy + redeem a new code (send a reminder email before `expiresAt`).

### Why it's simpler
Throws away the whole subscription **lifecycle** (webhooks-as-state-machine,
proration, dunning, cancel-at-period-end, auto-renew). No surprise renewals —
which parents trust more. Great for early access: you can generate codes **by
hand** to validate willingness-to-pay before building any billing.

### Licenses store (if self-issuing codes)
```js
getStore("licenses")  // key: the code itself, e.g. ATLAS-4F2A-...
{
  tier: "plus",
  durationDays: 365,
  status: "unused",        // unused | redeemed | refunded
  boundEmail: "parent@…",  // optional: only this email may redeem
  redeemedBy: null,        // userId once redeemed (one-time)
  redeemedAt: null,
  createdAt: "…"
}
```

### `redeem-license.mjs` (skeleton)
```js
import { getStore } from "@netlify/blobs";
import { verifyUserId } from "../lib/auth.mjs";

export default async (req) => {
  const userId = await verifyUserId(req.headers.get("authorization"));
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { code } = await req.json();
  const licenses = getStore("licenses");
  const lic = await licenses.get(code, { type: "json" });

  if (!lic || lic.status !== "unused") {
    return Response.json({ error: "Invalid or already-used code" }, { status: 400 });
  }
  // one-time: bind to this account
  lic.status = "redeemed"; lic.redeemedBy = userId; lic.redeemedAt = new Date().toISOString();
  await licenses.setJSON(code, lic);

  const expiresAt = new Date(Date.now() + lic.durationDays * 864e5).toISOString();
  await getStore("entitlements").setJSON(`user_${userId}`, {
    tier: lic.tier, status: "active", source: "license", expiresAt,
    updatedAt: new Date().toISOString(),
  });
  return Response.json({ success: true, tier: lic.tier, expiresAt });
};
```
> ⚠️ Do **not** use purely-offline signed codes with no store — you can't prevent a
> shared code being redeemed many times, and you can't revoke/refund. A small
> redeemed-store is what makes codes one-time and revocable.

### Merchant-of-Record option (the cleanest)
**Lemon Squeezy / Paddle / Gumroad** can host checkout, **auto-generate + email a
license key**, expose a **license validate/activate API**, and **handle VAT as the
merchant of record** (they invoice + remit — removes a real UK/EU tax headache for a
small operation). In that case `redeem-license` calls *their* validate/activate API
instead of a local `licenses` store, then writes your `entitlements` record.
(Verify each provider's current license + tax features before committing.)

### Trade-offs
- ➕ Lowest build, parent-friendly, no surprise charges, MoR handles VAT, codes
  double as gift/promo/bulk/school licenses.
- ➖ **Manual renewal → more churn** (mitigate with pre-expiry reminder emails);
  refunds are manual (mark code refunded + revoke entitlement); "I lost my code"
  support (look up by email/payment).

---

## 5. Payment model B — auto-renew subscriptions (Stripe)

Add later if recurring revenue matters more than simplicity. Same downstream
(`entitlements` + enforcement); different writer.

### Components
| Function | Job |
|---|---|
| `create-checkout-session.mjs` | Start a Stripe Checkout subscription |
| `create-portal-session.mjs` | Open Stripe **Customer Portal** ("Manage subscription") |
| `stripe-webhook.mjs` | **Trust anchor** — verify signature, map events → `entitlements` |
| `get-entitlement.mjs` | Client reads tier/status for UX |

### `stripe-webhook.mjs` (skeleton)
```js
// 1. verify Stripe-Signature with the webhook secret (MANDATORY)
// 2. switch(event.type):
//    checkout.session.completed         -> write entitlements {active, tier, expiresAt=period_end}
//    customer.subscription.updated       -> update tier/status/expiresAt
//    customer.subscription.deleted       -> status=canceled (keep access until expiresAt)
//    invoice.payment_failed              -> status=past_due (grace)
// 3. idempotent (Stripe retries); key by event.id
```

### Lifecycle states (small state machine, webhook-driven)
`trialing → active → past_due (grace) → canceled (access until period end) → expired`.
Upgrade/downgrade = Stripe proration + a webhook update.

### JWT claims vs store lookup (a real fork)
- **Entitlement store read** (recommended source of truth): always fresh; one extra
  Blobs read per gated call.
- **GoTrue `app_metadata` → JWT claims**: zero extra reads, but **stale until token
  refresh** (bad on downgrade/cancel) and needs the admin API to write.
- Recommendation: **store = truth**; optionally mirror tier into the JWT for cheap
  UX, never enforce revocation-sensitive checks on a possibly-stale claim.

---

## 6. Client UX (same for both models)
- **Activate field** (license model) in Parent Zone / settings: paste code → call
  `redeem-license` → refresh entitlement.
- **Manage subscription** button (Stripe model) → Customer Portal.
- Lock badges + upsell CTAs driven by `ENTITLEMENTS` map + `get-entitlement`.
- All UX only — never the enforcement boundary.

## 7. Compliance / safety (selling to parents of minors)
- **Payer is the adult parent** — fits the existing parent-managed account model;
  bill the parent, not the child.
- **Webhook signature verification** is non-negotiable (else "paid" is forgeable).
- **UK consumer rights**: clear pricing, easy cancellation, 14-day cooling-off;
  **VAT** (MoR handles it; Stripe needs Stripe Tax).
- **Never store card data**; secrets (Stripe/MoR keys) in **Netlify env vars only**.

## 8. Migration & rollout
- Every existing user is `tier:"free"` → **grandfather them**; don't paywall
  features they already use (churn risk).
- **Dark-launch** behind a `CONFIG` flag: build entitlement plumbing, keep
  everything free, flip the paywall when ready.
- Use provider **test mode** before going live.

## 9. Suggested phasing
1. **Plumbing, no paywall:** `entitlements` store, `entitlement.mjs` helper,
   `get-entitlement`, stop trusting client `tier`. Everything stays free.
2. **Gate the cost centre:** `requireTier` + quotas on the `evaluate-*` functions.
3. **License redeem + activation UX** (model A) via a Merchant-of-Record.
4. **Packaging**: finalize Free/Plus/Family contents in the `ENTITLEMENTS` map.
5. *(Optional, later)* Stripe auto-renew as a second writer into `entitlements`.
6. **Multi-child/Family** seat enforcement (ties to the deferred multi-child phase).

## 10. Decision log
- **Trust boundary → server-side** is the real architectural change, not payments.
- **Entitlement store is the stable core; payment is pluggable** — so starting with
  license codes does **not** lock out auto-renew subscriptions later.
- For Atlas's current stage (early access, solo-ish, parent buyers): **yearly
  license codes via a Merchant-of-Record** is the recommended first step.
