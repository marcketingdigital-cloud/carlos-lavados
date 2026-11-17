'use strict';
const menuButton=document.getElementById('menu-toggle');
const mobileMenu=document.getElementById('mobile-nav');
if(menuButton&&mobileMenu){
 menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));mobileMenu.hidden=isOpen;menuButton.setAttribute('aria-label',isOpen?'Abrir menú':'Cerrar menú');});
 mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');mobileMenu.hidden=true;}));
}
/* CTA móvil sin superposición: sale durante la portada, el calendario,
   el CTA final y el footer. Vuelve a aparecer únicamente entre secciones.
   No usa opacidad fantasma ni bloquea los iconos de la página. */
const booking=document.getElementById('reservar');
const sticky=document.getElementById('mobile-cta');
const footer=document.querySelector('.footer');
const heroSection=document.querySelector('.hero-first-screen') || document.querySelector('.hero');
const finalCTA=document.querySelector('.last-cta');
if(sticky){
 const zones={hero:true,booking:false,final:false,footer:false};
 const updateSticky=()=>{
  const hide=zones.hero||zones.booking||zones.final||zones.footer;
  sticky.classList.toggle('is-muted',zones.hero||zones.final);
  sticky.classList.toggle('in-booking',zones.booking||zones.footer);
  sticky.tabIndex=hide?-1:0;
  if(hide)sticky.setAttribute('aria-hidden','true');
  else sticky.removeAttribute('aria-hidden');
  sticky.classList.add('is-ready');
 };
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.target===heroSection)zones.hero=entry.isIntersecting;
      if(entry.target===booking)zones.booking=entry.isIntersecting;
      if(entry.target===finalCTA)zones.final=entry.isIntersecting;
      if(entry.target===footer)zones.footer=entry.isIntersecting;
    });
    updateSticky();
  },{rootMargin:'-78px 0px -75px 0px',threshold:0});
  [heroSection,booking,finalCTA,footer].forEach(el=>{if(el)observer.observe(el)});
 }else{
  const recompute=()=>{
   const vis=el=>{if(!el)return false;const r=el.getBoundingClientRect();return r.bottom>78&&r.top<window.innerHeight-75};
   zones.hero=vis(heroSection);zones.booking=vis(booking);zones.final=vis(finalCTA);zones.footer=vis(footer);updateSticky();
  };
  window.addEventListener('scroll',recompute,{passive:true});
  window.addEventListener('resize',recompute);
  recompute();
 }
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
