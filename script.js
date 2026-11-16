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
/* Medición sin trackers externos para accesos al calendario de CARLOS. */
document.querySelectorAll('.book-link').forEach(function(link){
  link.addEventListener('click',function(){
    if(Array.isArray(window.dataLayer)) window.dataLayer.push({event:'carlos_reserva_click',cta_location:link.closest('section')?.id || 'navigation'});
  });
});

/* CARLOS RESERVA: cargador oficial Cal.com. El embed inline gestiona su propia altura.
   En navegadores que bloqueen scripts externos siempre existe el enlace directo a la agenda. */
(function(C,A,L){
  const queue=function(api,args){api.q.push(args)};
  const doc=C.document;
  C.Cal=C.Cal||function(){
    const cal=C.Cal, args=arguments;
    if(!cal.loaded){
      cal.ns={}; cal.q=cal.q||[];
      const script=doc.createElement('script'); script.src=A; script.async=true;
      doc.head.appendChild(script); cal.loaded=true;
    }
    if(args[0]===L){
      const api=function(){queue(api,arguments)};
      const namespace=args[1]; api.q=api.q||[];
      if(typeof namespace==='string'){cal.ns[namespace]=api;queue(api,args);}
      else queue(cal,args);
      return;
    }
    queue(cal,args);
  };
})(window,'https://app.cal.com/embed/embed.js','init');
if(document.getElementById('cal-booking')){
  Cal('init','carlos-reserva',{origin:'https://app.cal.com'});
  Cal.ns['carlos-reserva']('inline',{
    elementOrSelector:'#cal-booking',
    calLink:'carlos-lavados/solicitud-lavado-domicilio',
    config:{layout:'month_view',theme:'dark'}
  });
  Cal.ns['carlos-reserva']('ui',{
    styles:{branding:{brandColor:'#00A86B'}},
    hideEventTypeDetails:false,
    layout:'month_view'
  });
}
