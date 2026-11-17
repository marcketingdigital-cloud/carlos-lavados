'use strict';
const menuButton=document.getElementById('menu-toggle');
const mobileMenu=document.getElementById('mobile-nav');
if(menuButton&&mobileMenu){
 menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));mobileMenu.hidden=isOpen;menuButton.setAttribute('aria-label',isOpen?'Abrir menú':'Cerrar menú');});
 mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');mobileMenu.hidden=true;}));
}
/* CTA adaptativo: se atenúa cuando el principal ya es visible, se recupera
   al salir del hero y se retira por completo en reservas y pie de página. */
const booking=document.getElementById('reservar');
const sticky=document.getElementById('mobile-cta');
const footer=document.querySelector('.footer');
const primaryCTA=document.getElementById('hero-booking-cta');
if(sticky && 'IntersectionObserver' in window){
 const zones={hero:false,booking:false,footer:false};
 const updateSticky=()=>{
  const hide=zones.booking||zones.footer;
  const dim=zones.hero&&!hide;
  sticky.classList.toggle('in-booking',hide);
  sticky.classList.toggle('is-muted',dim);
  sticky.tabIndex=hide||dim?-1:0;
  if(hide||dim)sticky.setAttribute('aria-hidden','true');
  else sticky.removeAttribute('aria-hidden');
 };
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
   if(entry.target===primaryCTA)zones.hero=entry.isIntersecting;
   if(entry.target===booking)zones.booking=entry.isIntersecting;
   if(entry.target===footer)zones.footer=entry.isIntersecting;
  }
  updateSticky();
 },{rootMargin:'-75px 0px -78px 0px',threshold:0.01});
 if(primaryCTA)observer.observe(primaryCTA);
 if(booking)observer.observe(booking);
 if(footer)observer.observe(footer);
}

/* Cargador oficial Cal.com. En caso de bloqueo, se conserva el enlace directo. */
(function (C, A, L) {
  const p = function (a, ar) { a.q.push(ar); };
  const d = C.document;
  C.Cal = C.Cal || function () {
    const cal = C.Cal, ar = arguments;
    if (!cal.loaded) {
      cal.ns = {}; cal.q = cal.q || [];
      const s = d.createElement('script');s.src=A;s.async=true;d.head.appendChild(s);cal.loaded=true;
    }
    if (ar[0] === L) {
      const a = function () { p(a, arguments); };
      const namespace=ar[1];a.q=a.q||[];
      if (typeof namespace === 'string') { cal.ns[namespace]=a;p(a,ar); }
      else p(cal,ar);
      return;
    }
    p(cal,ar);
  };
})(window,'https://app.cal.com/embed/embed.js','init');
if(document.getElementById('cal-booking')){
 Cal('init','carlos-reserva',{origin:'https://app.cal.com'});
 Cal.ns['carlos-reserva']('inline',{elementOrSelector:'#cal-booking',calLink:'carlos-lavados/solicitud-lavado-domicilio',config:{layout:'month_view',theme:'dark'}});
 Cal.ns['carlos-reserva']('ui',{styles:{branding:{brandColor:'#24D65A'}},hideEventTypeDetails:true,layout:'month_view'});
}

/* V4.1: accesibilidad del menú; seguimiento de CTA sin recopilar datos personales. */
if(menuButton&&mobileMenu){
 document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&!mobileMenu.hidden){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');menuButton.focus();}});
 document.addEventListener('click',(event)=>{if(!mobileMenu.hidden&&!mobileMenu.contains(event.target)&&!menuButton.contains(event.target)){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');}});
}
