# Year 7 `_base/` — the legacy shared backbone (intentional exception)

Year 7 predates the re-architecture. Its Science / History / Geography **island
definitions, flashcards and questions** were all authored together in one file
(`curriculum.js`), and the matching lessons in `lessons.js`, keyed by `island-N`
ids. These two files are the shared backbone the per-subject `topics.js` files
build on (those just add the topic *tiles*).

This is **deliberately left as-is.** Splitting `_base/` into per-subject files
(to match the Year 8 / `_TEMPLATE` layout) would mean re-serialising large blocks
of lesson HTML, which risks subtle content/escaping bugs — high risk for a purely
cosmetic gain. The content is verified at exact parity with the original site, so
we keep it byte-for-byte and document the exception here instead.

**For new years (Y9–Y11): do NOT copy this pattern.** Use the canonical per-subject
layout in `content/_TEMPLATE/`.
