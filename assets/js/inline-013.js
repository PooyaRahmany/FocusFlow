

(()=> {
  const getApi=()=>window.__ffCalendar;
  const isFa=()=>!!(getApi()&&getApi().isFa());
  const localizePicker=()=>{
    const api=getApi(), overlay=document.getElementById('focusflowMonthPicker');
    if(!api||!overlay)return;
    const fa=isFa(), grid=overlay.querySelector('.month-picker-grid');
    overlay.dir=fa?'rtl':'ltr';
    if(grid) grid.dir=fa?'rtl':'ltr';
    if(fa){
      const weekdays=['ش','ی','د','س','چ','پ','ج'];
      grid?.querySelectorAll('.month-choice').forEach(card=>{
        const row=card.querySelector('.mini-month-weekdays');
        if(row){row.replaceChildren(...weekdays.map(label=>{const el=document.createElement('span');el.textContent=label;return el;}));}
      });
    }
  };
  document.addEventListener('click',e=>{
    if(e.target.closest?.('#monthTitle')) requestAnimationFrame(localizePicker);
  },true);
  window.addEventListener('focusflow:localechange',()=>requestAnimationFrame(localizePicker));
})();

