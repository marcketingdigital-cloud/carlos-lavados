/* CARLOS V4.6 — Selección accesible de las etapas. Sin cambios en Cal.com. */
(function(){
  'use strict';
  const section=document.getElementById('experiencia');
  if(!section)return;
  const tabs=Array.from(section.querySelectorAll('[data-journey-step]'));
  const panel=section.querySelector('#journey-detail');
  const number=section.querySelector('#journey-detail-number');
  const title=section.querySelector('#journey-detail-title');
  const description=section.querySelector('#journey-detail-description');
  const panelIcon=section.querySelector('#journey-detail-icon');
  if(tabs.length!==3||!panel||!number||!title||!description||!panelIcon)return;
  const steps=[
    {title:'ELEGÍ TU HORARIO',description:'Explorá las fechas y horas disponibles mediante CARLOS RESERVA.'},
    {title:'CONTANOS QUÉ NECESITÁS',description:'Indicá tu domicilio y los detalles del lavado para que Carlos pueda revisar tu solicitud.'},
    {title:'RECIBÍ LA CONFIRMACIÓN',description:'Carlos revisa disponibilidad y traslado. Tu turno queda confirmado únicamente después de su aprobación.'}
  ];
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  function selectStep(index,focusTab){
    if(index<0||index>=tabs.length)return;
    tabs.forEach((tab,i)=>{
      const active=i===index;
      tab.setAttribute('aria-selected',String(active));
      tab.tabIndex=active?0:-1;
      tab.classList.toggle('is-active',active);
    });
    const selected=tabs[index];
    panel.setAttribute('aria-labelledby',selected.id);
    number.textContent=String(index+1).padStart(2,'0')+' / 03';
    title.textContent=steps[index].title;
    description.textContent=steps[index].description;
    const icon=selected.querySelector('svg');
    if(icon)panelIcon.replaceChildren(icon.cloneNode(true));
    if(focusTab)selected.focus();
    panel.classList.remove('is-switching');
    if(!reduced.matches){
      void panel.offsetWidth;
      panel.classList.add('is-switching');
    }
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>selectStep(index,false));
    tab.addEventListener('keydown',event=>{
      let next=null;
      if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index+tabs.length-1)%tabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=tabs.length-1;
      if(next===null)return;
      event.preventDefault();
      selectStep(next,true);
    });
  });
  selectStep(0,false);
})();