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
const promoCTA=document.getElementById('promocion-bienvenida');
if(sticky){
 const zones={hero:true,booking:false,final:false,footer:false,promo:false};
 const updateSticky=()=>{
  const hide=zones.hero||zones.booking||zones.final||zones.footer||zones.promo;
  sticky.classList.toggle('is-muted',zones.hero||zones.final);
  sticky.classList.toggle('in-booking',zones.booking||zones.footer);
  sticky.classList.toggle('is-hidden',hide);
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
      if(entry.target===promoCTA)zones.promo=entry.isIntersecting;
    });
    updateSticky();
  },{rootMargin:'-78px 0px -75px 0px',threshold:0});
  [heroSection,booking,finalCTA,footer,promoCTA].forEach(el=>{if(el)observer.observe(el)});
 }else{
  const recompute=()=>{
   const vis=el=>{if(!el)return false;const r=el.getBoundingClientRect();return r.bottom>78&&r.top<window.innerHeight-75};
   zones.hero=vis(heroSection);zones.booking=vis(booking);zones.final=vis(finalCTA);zones.footer=vis(footer);zones.promo=vis(promoCTA);updateSticky();
  };
  window.addEventListener('scroll',recompute,{passive:true});
  window.addEventListener('resize',recompute);
  recompute();
 }
}

/* V4.4.4: carrusel accesible con scroll-snap nativo y relieve de selección.
   Las fotografías son conceptuales y los enlaces existentes a #reservar siguen activos. */
const serviceTrack=document.getElementById('services-track');
if(serviceTrack){
 const cards=Array.from(serviceTrack.querySelectorAll('.service-card'));
 const dots=Array.from(document.querySelectorAll('.service-dot'));
 const prev=document.querySelector('.service-arrow-prev');
 const next=document.querySelector('.service-arrow-next');
 const mobileServices=window.matchMedia('(max-width:600px)');
 let currentService=1;
 let scheduled=false;
 const updateService=(index)=>{
  currentService=Math.max(0,Math.min(cards.length-1,index));
  cards.forEach((card,i)=>card.classList.toggle('is-active',i===currentService));
  dots.forEach((dot,i)=>{dot.classList.toggle('is-active',i===currentService);dot.setAttribute('aria-pressed',String(i===currentService));});
  if(prev)prev.disabled=currentService===0;
  if(next)next.disabled=currentService===cards.length-1;
 };
 const scrollCard=(index,animate=true)=>{
  if(!cards[index])return;
  updateService(index);
  if(mobileServices.matches){
   const trackRect=serviceTrack.getBoundingClientRect();
   const cardRect=cards[index].getBoundingClientRect();
   const left=serviceTrack.scrollLeft+cardRect.left-trackRect.left-(trackRect.width-cardRect.width)/2;
   if(animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    serviceTrack.scrollTo({left,behavior:'smooth'});
   }else serviceTrack.scrollLeft=left;
  }
 };
 const nearestCard=()=>{
  if(!mobileServices.matches)return;
  const center=serviceTrack.getBoundingClientRect().left+serviceTrack.clientWidth/2;
  let chosen=0,closest=Infinity;
  cards.forEach((card,i)=>{
   const r=card.getBoundingClientRect(),distance=Math.abs(r.left+r.width/2-center);
   if(distance<closest){closest=distance;chosen=i;}
  });
  updateService(chosen);
 };
 serviceTrack.addEventListener('scroll',()=>{
  if(!scheduled){
   scheduled=true;
   requestAnimationFrame(()=>{scheduled=false;nearestCard();});
  }
 },{passive:true});
 serviceTrack.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
   e.preventDefault();
   scrollCard(currentService+(e.key==='ArrowRight'?1:-1));
  }
 });
 dots.forEach((dot,i)=>dot.addEventListener('click',()=>scrollCard(i)));
 if(prev)prev.addEventListener('click',()=>scrollCard(currentService-1));
 if(next)next.addEventListener('click',()=>scrollCard(currentService+1));
 const initialize=()=>scrollCard(1,false);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});
 else requestAnimationFrame(initialize);
 window.addEventListener('resize',()=>{if(mobileServices.matches)scrollCard(currentService,false);},{passive:true});
}
/* El porcentaje anima solo cuando la promoción está a la vista.
   Es discreto, no bloquea la interacción y respeta movimiento reducido. */
const welcomeLink=document.querySelector('.welcome-card-link');
if(welcomeLink){
 if('IntersectionObserver' in window){
  const watcher=new IntersectionObserver(entries=>{
   for(const e of entries)if(e.target===welcomeLink)welcomeLink.classList.toggle('promo-inview',e.isIntersecting);
  },{threshold:.25});
  watcher.observe(welcomeLink);
 }else welcomeLink.classList.add('promo-inview');
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
