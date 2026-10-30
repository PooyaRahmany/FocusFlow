

(()=>{
 const localizedWeekdays=['شنبه','یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه'];
 const englishWeekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 function fixWeekdayHeaders(){
   const fa=document.documentElement.lang==='fa'||document.documentElement.dir==='rtl';
   const labels=fa?localizedWeekdays:englishWeekdays;
   document.querySelectorAll('#calendarPage .calendar-card .weekdays').forEach(root=>{
     root.replaceChildren(...labels.map(label=>{const span=document.createElement('span');span.textContent=label;return span;}));
     root.style.direction=fa?'rtl':'ltr';
     root.setAttribute('aria-label',fa?'روزهای هفته':'Days of the week');
   });
 }
 window.__ffRefreshCalendarWeekdays=fixWeekdayHeaders;
 window.addEventListener('DOMContentLoaded',()=>{
   /* Restore the original decorative calendar backgrounds from embedded assets. */
   document.querySelectorAll('#calendarCard,#previousMonthCard,#followingMonthCard').forEach(card=>{card.removeAttribute('data-bg');});
   fixWeekdayHeaders();
 },{once:true});
 window.addEventListener('focusflow:localechange',()=>requestAnimationFrame(fixWeekdayHeaders));
})();

