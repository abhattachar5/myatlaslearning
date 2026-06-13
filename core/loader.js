// core/loader.js — emits every content module from MANIFEST.order as ordered,
// parser-blocking <script> tags, then fires a one-off `atlas:ready` event.
//
// It uses document.write DURING PAGE PARSE (the loader tag is a normal blocking
// script in <head>), so the content scripts execute IN ORDER and FINISH before
// any later script on the page. That means existing pages need ZERO changes to
// their init code — the globals are fully populated by the time inline scripts
// run, exactly as with the old hand-written <script> list. Same-origin scripts,
// so Chrome's cross-origin document.write intervention does not apply.
//
// A page using this needs only these tags, in this order:
//   <script src="core/globals.js"></script>
//   <script src="core/config.js"></script>
//   <script src="core/manifest.js"></script>
//   <script src="core/loader.js"></script>
//   ...then the engine consumers (auth-shim.js, app.js) and the page's own scripts.

(function () {
  var list = (typeof MANIFEST !== 'undefined' && MANIFEST.order) ? MANIFEST.order.slice() : [];
  // Pages that run tests set window.ATLAS_NEEDS_TESTS = true (test.html, exam.html) to also
  // pull the test engine + generators. They load AFTER content, so generators see the islands.
  if (window.ATLAS_NEEDS_TESTS && typeof MANIFEST !== 'undefined' && MANIFEST.tests) {
    list = list.concat(MANIFEST.tests);
  }
  var base = (window.ATLAS_BASE || '');

  if (document.readyState === 'loading') {
    // Normal case: loader runs while the document is still parsing.
    for (var i = 0; i < list.length; i++) {
      document.write('<script src="' + base + list[i] + '"><\/script>');
    }
    // Runs after all the scripts above have executed (written in order).
    document.write('<script>if(typeof Atlas!=="undefined")Atlas._markReady();' +
                   'document.dispatchEvent(new Event("atlas:ready"));<\/script>');
  } else {
    // Fallback (loader added after parse, e.g. dynamically): inject in order.
    var done = 0;
    function tick() { if (++done >= list.length) { if (typeof Atlas !== 'undefined') Atlas._markReady(); document.dispatchEvent(new Event('atlas:ready')); } }
    if (!list.length) { tick(); return; }
    var frag = document.createDocumentFragment();
    list.forEach(function (src) {
      var s = document.createElement('script');
      s.src = base + src; s.async = false; s.onload = tick;
      // DEF-013: a failed load must not be counted as a silent success — log the
      // offending file, then still tick() so the loader doesn't hang on it.
      s.onerror = function () {
        if (typeof console !== 'undefined' && console.error) console.error('Atlas loader: failed to load ' + this.src);
        tick();
      };
      frag.appendChild(s);
    });
    document.head.appendChild(frag);
  }
})();
