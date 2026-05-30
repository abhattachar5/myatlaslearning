// Shared auth helper for Netlify Functions.
//
// SECURITY: do NOT trust the JWT payload without verification. Netlify Identity
// (GoTrue) signs tokens with HS256 using a site secret we don't hold, so we verify
// the bearer token by asking GoTrue to resolve it via its /user endpoint. A forged
// or tampered token is rejected (GoTrue returns non-200). The returned user id is the
// same value as the token's `sub` claim, so it preserves the existing `user_<sub>`
// blob keys — no data migration needed.
//
// This file lives outside netlify/functions/ so Netlify does not treat it as a
// function; it is bundled into each function via the relative import.

function identityBase() {
  // process.env.URL is the site's primary URL in Netlify Functions (and deploy previews).
  const site = (typeof process !== "undefined" && process.env && process.env.URL)
    ? process.env.URL
    : "https://myatlaslearning.netlify.app";
  return site.replace(/\/$/, "") + "/.netlify/identity";
}

/**
 * Verify a Bearer token with GoTrue and return the verified user id, or null.
 * @param {string|null} authHeader - the raw Authorization header value.
 * @returns {Promise<string|null>}
 */
export async function verifyUserId(authHeader) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  try {
    const res = await fetch(identityBase() + "/user", {
      headers: { Authorization: authHeader },
    });
    if (!res.ok) return null;
    const user = await res.json();
    const id = user && (user.id || user.sub);
    return id ? String(id) : null;
  } catch {
    return null;
  }
}
