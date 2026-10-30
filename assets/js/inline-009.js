

/* Fast month browser: lightweight month choices with a subtle slide-in sequence. */
(() => {
  if (document.getElementById('focusflowMonthPicker')) return;
  const overlay = document.createElement('div');
  overlay.id = 'focusflowMonthPicker';
  overlay.className = 'month-picker-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<section class="month-picker" role="dialog" aria-modal="true" aria-labelledby="monthPickerYear"><div class="month-picker-head"><span id="monthPickerYear" class="month-picker-year"></span><button type="button" class="month-picker-close" aria-label="Close">×</button></div><div class="month-picker-grid" role="group" aria-label="Months"></div></section>';
  document.body.append(overlay);
  const panel = overlay.querySelector('.month-picker');
  const grid = overlay.querySelector('.month-picker-grid');
  const closeButton = overlay.querySelector('.month-picker-close');
  let opener = null;
  const cal = () => window.__ffCalendar;
  const fa = () => !!(cal() && cal().isFa());
  const getTitle = () => document.getElementById('monthTitle');
  const numberYear = (year, localized) => localized
    ? new Intl.NumberFormat('fa-IR-u-nu-arabext', {useGrouping:false}).format(year)
    : String(year);
  const monthLabel = (date, localized) => new Intl.DateTimeFormat(
    localized ? 'fa-IR-u-ca-persian-nu-arabext' : 'en-US', {month:'long'}
  ).format(date);
  function close() {
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    const title=getTitle();
    if(title) title.setAttribute('aria-expanded','false');
    if(opener && opener.isConnected) opener.focus();
  }
  function openPicker() {
    const api = cal();
    if (!api || !(api.getMonth() instanceof Date)) return;
    const title=getTitle();
    if(!title) return;
    opener=title;
    const localized=fa(), shown=api.getMonth();
    let year, currentMonth, yearStart;
    if(localized) {
      const parts=api.jalaliParts(shown);
      year=parts.year; currentMonth=parts.month-1;
      yearStart=api.shiftCalendarMonth(shown,-currentMonth);
    } else {
      year=shown.getFullYear(); currentMonth=shown.getMonth();
      yearStart=new Date(year,0,1,12);
    }
    overlay.dir=localized?'rtl':'ltr';
    grid.dir=localized?'rtl':'ltr';
    grid.setAttribute('aria-label', localized ? 'ماه‌های سال' : 'Months of the year');
    overlay.querySelector('.month-picker-year').textContent=numberYear(year,localized);
    panel.setAttribute('aria-label',localized?'انتخاب ماه':'Choose a month');
    closeButton.setAttribute('aria-label',localized?'بستن انتخاب ماه':'Close month picker');
    const fragment=document.createDocumentFragment();
    const reduceMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('perf-lite');
    for(let i=0;i<12;i++) {
      if(i>0 && localized) yearStart=api.shiftCalendarMonth(yearStart,1);
      const monthDate=localized ? new Date(yearStart) : new Date(year,i,1,12);
      const label=monthLabel(monthDate,localized);
      const button=document.createElement('button');
      button.type='button'; button.className='month-choice';
      button.setAttribute('aria-pressed',String(i===currentMonth));
      button.setAttribute('aria-label',label);
      if(i===currentMonth) button.setAttribute('aria-current','date');
      button.style.setProperty('--month-index',String(i));
      button.style.setProperty('--month-slide-x',`${(localized ? -1 : 1) * (i%2===0 ? 14 : -14)}px`);
      if(reduceMotion) button.style.animation='none';
      const labelEl=document.createElement('span');
      labelEl.className='month-choice-label';
      labelEl.textContent=label;
      button.append(labelEl);
      button.addEventListener('click',()=>{
        const oldMonth=api.getMonth();
        const step=monthDate.getTime()>=oldMonth.getTime()?1:-1;
        /* Match the existing calendar-swipe sound when a revolver month is chosen. */
        if (typeof playEffect === 'function') playEffect('swap-month.mp3');
        if(typeof api.selectMonth==='function')api.selectMonth(monthDate,step);
        else api.setMonth(monthDate);
        close();
      });
      fragment.append(button);
    }
    grid.replaceChildren(fragment);
    /* Revolver carousel: bring the selected month to the center without rebuilding month cards. */
    requestAnimationFrame(()=>{const active=grid.querySelector('[aria-pressed="true"]');if(active)active.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'nearest',inline:'center'});});
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
    title.setAttribute('aria-expanded','true');
    const selected=grid.querySelector('[aria-pressed="true"]');
    (selected||closeButton).focus({preventScroll:true});
  }
  document.addEventListener('click',event=>{
    const title=event.target.closest && event.target.closest('#monthTitle');
    if(title){event.preventDefault();event.stopPropagation();openPicker();}
  },true);
  document.addEventListener('keydown',event=>{
    if(event.target.closest && event.target.closest('#monthTitle') && (event.key==='Enter'||event.key===' ')){event.preventDefault();openPicker();}
    if(event.key==='Escape' && overlay.classList.contains('show')) close();
  });
  closeButton.addEventListener('click',close);
  overlay.addEventListener('click',event=>{if(event.target===overlay)close();});
})();

