(() => {
  const c = window.SITE_CONFIG || {};
  const $all = (sel) => document.querySelectorAll(sel);
  const setText = (sel, value) => $all(sel).forEach(el => el.textContent = value);
  setText('[data-business-name]', c.businessName || "Akhter's Construction");
  setText('[data-phone]', c.phone || '8179234768');
  setText('[data-email-text]', c.email || 'akhtersconstruction@gmail.com');
  setText('[data-location]', c.location || 'Beside Royal Sea Hotel, Bandlaguda, Chandrayanagutta, Hyderabad, Telangana');
  setText('[data-experience]', c.experience || '5 years');
  document.title = `${c.businessName || "Akhter's Construction"} | Residential Construction & Property Assistance`;
  const phone = String(c.phone || '8179234768').replace(/\D/g, '');
  $all('[data-call]').forEach(a => a.href = `tel:+91${phone}`);
  $all('[data-email]').forEach(a => a.href = `mailto:${c.email || 'akhtersconstruction@gmail.com'}`);
  const wa = `https://wa.me/91${phone}?text=${encodeURIComponent(c.whatsappMessage || 'Hello, I would like to discuss a residential requirement.')}`;
  $all('[data-whatsapp]').forEach(a => a.href = wa);
  const grid = document.getElementById('service-grid');
  if (grid && Array.isArray(c.services)) {
    grid.innerHTML = c.services.map(s => `<article class="service-card"><div class="service-icon" aria-hidden="true">${s.icon || '•'}</div><h3>${s.title}</h3><p>${s.text}</p></article>`).join('');
  }
  const menu = document.querySelector('.menu'); const nav = document.getElementById('nav');
  if (menu && nav) {
    menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
  }
  const form = document.getElementById('lead-form'); const status = document.getElementById('form-status');
  if (form) form.addEventListener('submit', () => { const btn = form.querySelector('button[type="submit"]'); if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; } if (status) status.textContent = 'Sending your enquiry…'; });
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
})();
