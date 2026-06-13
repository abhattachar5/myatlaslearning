/* ════════════════════════════════════════════════════════════════════════
   Atlas — marketing landing page behaviour

   Auth logic is preserved verbatim from the original index.html so this page
   is a drop-in for the real app. Every call into the engine (gotrueAuth /
   app.js helpers) is guarded with a typeof check so the page renders cleanly
   in a standalone preview where those scripts are absent. When the engine
   scripts ARE present, the full flow runs unchanged.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var hasAuth = (typeof gotrueAuth !== 'undefined' && gotrueAuth);

  /* ── Theme ──────────────────────────────────────────────────────────── */
  function safeInitTheme() {
    if (typeof initTheme === 'function') { try { initTheme(); } catch (e) {} }
  }

  /* ── Bootstrap: redirect already-signed-in users, handle email tokens ── */
  function bootstrap() {
    safeInitTheme();
    if (!hasAuth) return; // standalone preview — nothing else to do

    var hash = window.location.hash;
    if (hash) {
      var tokenMatch = hash.match(/confirmation_token=([^&]+)/);
      var recoveryMatch = hash.match(/recovery_token=([^&]+)/);
      if (tokenMatch) {
        gotrueAuth.confirm(tokenMatch[1]).then(function () {
          window.location.hash = '';
          showView('forms'); switchTab('login');
          var errEl = document.getElementById('login-error');
          if (errEl) {
            errEl.textContent = 'Email confirmed! You can now sign in.';
            errEl.classList.add('show');
            errEl.style.color = 'var(--ok, #16a34a)';
          }
        }).catch(function (err) { console.error('Confirmation error:', err); });
        return;
      }
      if (recoveryMatch) {
        gotrueAuth.recover(recoveryMatch[1]).then(function (user) {
          window.location.hash = '';
          handlePostLogin(user);
        }).catch(function (err) { console.error('Recovery error:', err); });
        return;
      }
    }

    var identity = gotrueAuth.currentUser();
    var profile = JSON.parse(localStorage.getItem('sm_active_profile') || 'null');
    if (identity && profile) { window.location.href = 'dashboard.html'; return; }
    if (identity && !profile) { handlePostLogin(identity); }
  }

  /* ── Scroll to the auth panel and open the requested tab ─────────────── */
  function goAuth(tab) {
    showView('forms');
    switchTab(tab || 'login');
    var el = document.getElementById('auth-form-panel');
    if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ── View switching ─────────────────────────────────────────────────── */
  function showView(name) {
    var f = document.getElementById('auth-forms-view');
    var l = document.getElementById('auth-loading-view');
    var s = document.getElementById('profile-setup-view');
    if (f) f.style.display = (name === 'forms' || name === 'confirm') ? '' : 'none';
    if (l) l.style.display = name === 'loading' ? '' : 'none';
    if (s) s.style.display = name === 'setup' ? '' : 'none';

    var confirmMsg = document.getElementById('confirm-message');
    var tabBar = document.querySelector('.auth-tab-bar');
    if (name === 'confirm') {
      var fl = document.getElementById('form-login'); if (fl) fl.style.display = 'none';
      var fs = document.getElementById('form-signup'); if (fs) fs.style.display = 'none';
      if (confirmMsg) confirmMsg.style.display = '';
      if (tabBar) tabBar.style.display = 'none';
    } else if (name === 'forms') {
      if (confirmMsg) confirmMsg.style.display = 'none';
      if (tabBar) tabBar.style.display = '';
    }
  }

  function switchTab(tab) {
    var isLogin = tab === 'login';
    var tl = document.getElementById('tab-login');
    var ts = document.getElementById('tab-signup');
    if (tl) { tl.classList.toggle('active', isLogin); tl.setAttribute('aria-selected', isLogin); }
    if (ts) { ts.classList.toggle('active', !isLogin); ts.setAttribute('aria-selected', !isLogin); }
    var fl = document.getElementById('form-login'); if (fl) fl.style.display = isLogin ? '' : 'none';
    var fs = document.getElementById('form-signup'); if (fs) fs.style.display = isLogin ? 'none' : '';
    var cm = document.getElementById('confirm-message'); if (cm) cm.style.display = 'none';
    document.querySelectorAll('.form-error').forEach(function (el) { el.classList.remove('show'); });
    var focusEl = document.getElementById(isLogin ? 'login-email' : 'signup-email');
    if (focusEl) focusEl.focus();
  }

  /* ── Sign Up ────────────────────────────────────────────────────────── */
  async function handleSignup(e) {
    e.preventDefault();
    var emailEl = document.getElementById('signup-email');
    var passEl = document.getElementById('signup-password');
    var nameEl = document.getElementById('signup-name');
    var errEl = document.getElementById('signup-error');
    var btn = document.getElementById('signup-btn');
    errEl.classList.remove('show');
    if (!hasAuth) {
      errEl.textContent = 'Demo preview — connect the Atlas engine to create accounts.';
      errEl.classList.add('show');
      return;
    }
    var email = emailEl.value.trim(), password = passEl.value, fullName = nameEl.value.trim();
    btn.disabled = true; btn.textContent = 'Creating account…';
    try {
      await gotrueAuth.signup(email, password, { full_name: fullName });
      document.getElementById('confirm-email').textContent = email;
      showView('confirm');
    } catch (err) {
      errEl.textContent = err.message || 'Signup failed. Please try again.';
      errEl.classList.add('show');
    } finally {
      btn.disabled = false; btn.textContent = 'Create account';
    }
  }

  /* ── Sign In ────────────────────────────────────────────────────────── */
  async function handleLogin(e) {
    e.preventDefault();
    var emailEl = document.getElementById('login-email');
    var passEl = document.getElementById('login-password');
    var errEl = document.getElementById('login-error');
    var btn = document.getElementById('login-btn');
    errEl.classList.remove('show');
    if (!hasAuth) {
      errEl.textContent = 'Demo preview — connect the Atlas engine to sign in.';
      errEl.classList.add('show');
      return;
    }
    var email = emailEl.value.trim(), password = passEl.value;
    btn.disabled = true; btn.textContent = 'Signing in…';
    try {
      var user = await gotrueAuth.login(email, password, true);
      handlePostLogin(user);
    } catch (err) {
      var msg = err.message || 'Login failed.';
      if (msg.includes('not confirmed')) msg = 'Please confirm your email first. Check your inbox for a confirmation link.';
      else if (msg.includes('credentials') || msg.includes('invalid_grant')) msg = 'Invalid email or password. Please try again.';
      errEl.textContent = msg; errEl.classList.add('show');
    } finally {
      btn.disabled = false; btn.textContent = 'Sign in';
    }
  }

  /* ── Forgot Password ────────────────────────────────────────────────── */
  async function handleForgotPassword() {
    var email = document.getElementById('login-email').value.trim();
    var errEl = document.getElementById('login-error');
    if (!email) {
      errEl.textContent = 'Enter your email above, then click "Forgot password?".';
      errEl.classList.add('show');
      document.getElementById('login-email').focus();
      return;
    }
    if (!hasAuth) {
      errEl.textContent = 'Demo preview — connect the Atlas engine to reset passwords.';
      errEl.classList.add('show');
      return;
    }
    try {
      await gotrueAuth.requestPasswordRecovery(email);
      errEl.textContent = 'Password reset email sent! Check your inbox.';
      errEl.classList.add('show'); errEl.style.color = 'var(--ok, #16a34a)';
    } catch (err) {
      errEl.textContent = err.message || 'Could not send reset email.';
      errEl.classList.add('show'); errEl.style.color = '';
    }
  }

  /* ── Post-login flow ────────────────────────────────────────────────── */
  async function handlePostLogin(identityUser) {
    showView('loading');
    try {
      await identityUser.jwt();
      var oldUser = JSON.parse(localStorage.getItem('sm_user') || 'null');
      var oldProgress = JSON.parse(localStorage.getItem('sm_progress') || 'null');
      var serverData = null;
      if (oldUser || oldProgress) serverData = await migrateLocalProgress();
      if (!serverData) serverData = await loadProgressFromServer();

      if (serverData && serverData.name) {
        if (typeof clearAccountData === 'function') clearAccountData();
        var parentName = serverData.parentName || '';
        if (!parentName) {
          var meta = identityUser.user_metadata;
          parentName = (meta && meta.full_name) ? meta.full_name : '';
        }
        var profile = {
          name: serverData.name, parentName: parentName, year: serverData.year || '',
          school: serverData.school || '', tier: serverData.tier || 'free', xp: serverData.xp || 0,
          joinDate: serverData.joinDate || new Date().toISOString(),
          yearHistory: serverData.yearHistory || [], parentPin: serverData.parentPin || ''
        };
        localStorage.setItem('sm_active_profile', JSON.stringify(profile));
        localStorage.setItem('sm_progress', JSON.stringify(serverData.progress || {}));
        localStorage.setItem('sm_streak', String(serverData.streak || 0));
        if (serverData.lastStudy) localStorage.setItem('sm_last_study', serverData.lastStudy);
        localStorage.setItem('sm_test_results', JSON.stringify(serverData.testResults || {}));
        localStorage.setItem('sm_revision_done', JSON.stringify(serverData.revisionDone || {}));
        localStorage.setItem('sm_assignments', JSON.stringify(serverData.assignments || []));
        localStorage.setItem('sm_active_days', JSON.stringify(serverData.activeDays || []));
        if (serverData.studyPlan) localStorage.setItem('sm_study_plan', JSON.stringify(serverData.studyPlan));
        if (serverData.comprehension && typeof restoreComprehension === 'function') restoreComprehension(serverData.comprehension);
        if (serverData.preferences && serverData.preferences.theme) {
          localStorage.setItem('sm_theme', serverData.preferences.theme);
          document.documentElement.setAttribute('data-theme', serverData.preferences.theme);
        }
        window.location.href = 'dashboard.html';
        return;
      }
      showView('setup');
    } catch (err) {
      console.error('Post-login error:', err);
      showView('setup');
    }
  }

  /* ── Profile setup ──────────────────────────────────────────────────── */
  async function handleProfileSetup(e) {
    e.preventDefault();
    var nameEl = document.getElementById('setup-name');
    var yearEl = document.getElementById('setup-year');
    var schoolEl = document.getElementById('setup-school');
    var errEl = document.getElementById('setup-error');
    errEl.classList.remove('show');
    var name = nameEl.value.trim(), year = yearEl.value, school = schoolEl.value.trim();
    if (!name) { errEl.textContent = 'Please enter your child\'s name.'; errEl.classList.add('show'); nameEl.focus(); return; }
    if (!year) { errEl.textContent = 'Please select a year group.'; errEl.classList.add('show'); yearEl.focus(); return; }

    var identityUser = hasAuth ? gotrueAuth.currentUser() : null;
    var parentName = '';
    if (identityUser && identityUser.user_metadata && identityUser.user_metadata.full_name) parentName = identityUser.user_metadata.full_name;

    var profile = {
      name: name, parentName: parentName, year: year, school: school,
      tier: 'free', xp: 0, joinDate: new Date().toISOString()
    };
    localStorage.setItem('sm_active_profile', JSON.stringify(profile));

    if (typeof fetchWithAuth === 'function') {
      try {
        await fetchWithAuth('/.netlify/functions/save-progress', {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: profile.name, parentName: profile.parentName, year: profile.year,
            school: profile.school, tier: profile.tier, xp: profile.xp, streak: 0,
            lastStudy: null, joinDate: profile.joinDate,
            preferences: { theme: localStorage.getItem('sm_theme') || 'light' }, progress: {}
          })
        });
      } catch (err) { console.warn('Failed to save profile to server (will sync later):', err.message); }
    }
    window.location.href = 'dashboard.html';
  }

  /* ── Marketing interactions: flashcard flip, mobile nav, reveal ──────── */
  function initMarketing() {
    document.querySelectorAll('[data-flip]').forEach(function (card) {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      function flip() { card.classList.toggle('is-flipped'); }
      card.addEventListener('click', flip);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
      });
    });

    var navToggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-nav-links]');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ── Expose globals (handlers referenced by inline onclick/onsubmit) ──── */
  window.goAuth = goAuth;
  window.showView = showView;
  window.switchTab = switchTab;
  window.handleSignup = handleSignup;
  window.handleLogin = handleLogin;
  window.handleForgotPassword = handleForgotPassword;
  window.handlePostLogin = handlePostLogin;
  window.handleProfileSetup = handleProfileSetup;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { bootstrap(); initMarketing(); });
  } else { bootstrap(); initMarketing(); }
})();
