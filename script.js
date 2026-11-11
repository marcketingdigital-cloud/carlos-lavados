/* CARLOS — WhatsApp Business. Confirmar formato real del número antes de anunciar. */
const WA_NUMBER = '541141427755';
function waUrl(text) {
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text || 'Hola Carlos, quiero consultar por un lavado a domicilio.');
}
function trackCTA(origin) {
  if (Array.isArray(window.dataLayer)) window.dataLayer.push({event:'carlos_whatsapp_click',cta_location:origin});
}
document.querySelectorAll('.wa-link').forEach(function(link) {
  link.href = waUrl(link.dataset.message);
  link.addEventListener('click',function(){ trackCTA(link.closest('section')?.id || 'general'); });
});
const toggle = document.getElementById('menu-button');
const menu = document.getElementById('mobile-nav');
if (toggle && menu) {
  toggle.addEventListener('click',function(){
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    menu.hidden = isOpen;
  });
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape' && !menu.hidden){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.focus();}});
}
const form = document.getElementById('quote-form');
if (form) form.addEventListener('submit',function(e){
  e.preventDefault(); if (!form.reportValidity()) return;
  const vehicle = document.getElementById('vehicle').value.trim();
  const service = document.getElementById('service').value.trim();
  const location = document.getElementById('location').value.trim();
  const details = document.getElementById('details').value.trim();
  const message = ['Hola Carlos, quiero pedir presupuesto para un lavado de auto a domicilio.','','Vehículo: '+vehicle,'Servicio: '+service,'Localidad: '+location,details ? 'Detalles: '+details : '', '', '¿Me indicás presupuesto y disponibilidad?'].filter(function(line,index){return line !== '' || index === 1;}).join('\n');
  trackCTA('formulario_presupuesto');
  const url = waUrl(message);
  // Un solo intento de apertura evita ventanas duplicadas en navegadores móviles.
  window.location.assign(url);
});
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();