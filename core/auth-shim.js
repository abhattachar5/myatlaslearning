// auth-shim.js — Lightweight GoTrue shim replacing the Netlify Identity Widget
// Provides window.netlifyIdentity with currentUser(), logout(), init(), gotrue
// Must be loaded AFTER gotrue.js CDN and BEFORE app.js

(function () {
  // Strip X-Nf-Client header that causes CORS failures from localhost
  var _origFetch = window.fetch;
  window.fetch = function (url, options) {
    if (options && options.headers && options.headers['X-Nf-Client']) {
      var h = Object.assign({}, options.headers);
      delete h['X-Nf-Client'];
      options = Object.assign({}, options, { headers: h });
    }
    return _origFetch.call(this, url, options);
  };

  // Standalone GoTrue instance
  var GoTrueClient = (typeof GoTrue !== 'undefined') ? (GoTrue.default || GoTrue) : null;
  if (!GoTrueClient) {
    console.error('auth-shim: GoTrue library not loaded');
    return;
  }

  var gotrueAuth = new GoTrueClient({
    APIUrl: 'https://myatlaslearning.netlify.app/.netlify/identity',
    setCookie: true
  });

  // Expose globally so index.html scripts and app.js can use it
  window.gotrueAuth = gotrueAuth;

  // Shim matching the Netlify Identity Widget interface used by app.js
  window.netlifyIdentity = {
    currentUser: function () { return gotrueAuth.currentUser(); },
    logout: function () {
      var u = gotrueAuth.currentUser();
      if (u) return u.logout();
      return Promise.resolve();
    },
    init: function () { /* no-op — GoTrue auto-reads from localStorage */ },
    gotrue: gotrueAuth
  };
})();
