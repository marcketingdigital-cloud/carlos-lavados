'use strict';
const menuButton=document.getElementById('menu-toggle');
const mobileMenu=document.getElementById('mobile-nav');
if(menuButton&&mobileMenu){
 menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));mobileMenu.hidden=isOpen;menuButton.setAttribute('aria-label',isOpen?'Abrir menú':'Cerrar menú');});
 mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');mobileMenu.hidden=true;}));
}
const booking=document.getElementById('calendar-zone');
const sticky=document.getElementById('mobile-cta');
const footer=document.querySelector('.footer');
if(sticky&&'IntersectionObserver' in window){
 const zones={booking:false,footer:false};
 const updateSticky=()=>sticky.classList.toggle('in-booking',zones.booking||zones.footer);
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
   if(entry.target===booking)zones.booking=entry.isIntersecting;
   if(entry.target===footer)zones.footer=entry.isIntersecting;
  }
  updateSticky();
 },{rootMargin:'-85px 0px -75px 0px'});
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
 Cal.ns['carlos-reserva']('ui',{styles:{branding:{brandColor:'#00A86B'}},hideEventTypeDetails:true,layout:'month_view'});
}

/* V4.1: accesibilidad del menú; seguimiento de CTA sin recopilar datos personales. */
if(menuButton&&mobileMenu){
 document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&!mobileMenu.hidden){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');menuButton.focus();}});
 document.addEventListener('click',(event)=>{if(!mobileMenu.hidden&&!mobileMenu.contains(event.target)&&!menuButton.contains(event.target)){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');}});
}
