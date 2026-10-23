/* HubSpot public form embed: no private API key or backend credentials. */
(function () {
  'use strict';
  var attempts = 0;
  var maxAttempts = 20;
  var retryDelayMs = 500;
  var mounted = false;

  function mount() {
    var target = document.getElementById('hubspot-assessment-form');
    if (!target || mounted) return;
    if (window.hbspt && window.hbspt.forms && typeof window.hbspt.forms.create === 'function') {
      mounted = true;
      try {
        window.hbspt.forms.create({
          portalId: '149282104',
          formId: '646cc721-5cbf-45ad-95e8-174ade6b5221',
          target: '#hubspot-assessment-form'
        });
      } catch (error) {
        mounted = false;
        console.error('Assessment form could not be initialized.', error);
      }
    }
    if (!mounted && ++attempts < maxAttempts) {
      window.setTimeout(mount, retryDelayMs);
    } else if (!mounted) {
      target.setAttribute('data-form-status', 'unavailable');
      console.warn('Assessment form unavailable; email fallback remains visible.');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
}());
