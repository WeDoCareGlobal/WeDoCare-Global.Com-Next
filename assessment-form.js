/* HubSpot public form embed: no private API key or backend credentials. */
(function () {
  'use strict';
  function mount() {
    var target = document.getElementById('hubspot-assessment-form');
    if (!target || !window.hbspt || !window.hbspt.forms) return;
    window.hbspt.forms.create({
      portalId: '149282104',
      formId: '646cc721-5cbf-45ad-95e8-174ade6b5221',
      target: '#hubspot-assessment-form'
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
}());
