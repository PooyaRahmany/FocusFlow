
(function(){
 'use strict';
 const KEY='focusflow-native-widget-mode';
 const isFa=()=>((document.documentElement.lang||'').toLowerCase().startsWith('fa')||document.documentElement.dir==='rtl'||localStorage.getItem('focusflow-language')==='fa');
 const tr=(fa,en)=>isFa()?fa:en;
 const esc=s=>String(s??'').replace(/\s+/g,' ').trim();
 const launcher=document.createElement('button');launcher.id='ff-widget-launcher';launcher.className='menu-item';launcher.type='button';launcher.setAttribute('aria-label',tr('تنظیم ویجت‌های FocusFlow','Configure FocusFlow widgets'));
 launcher.innerHTML='<svg class="ic ff-widget-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="5" rx="2"/><rect x="13" y="10" width="8" height="11" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/></svg><span>'+tr('ویجت‌ها','Widgets')+'</span>';
 const modes=[
  ['combined','ترکیبی','Focus + tasks','تایمر و کارهای امروز','Timer and today’s tasks','◷'],
  ['timer','تایمر تمرکز','Focus timer','تایمر تمرکز','Focus timer','◷'],
  ['tasks','وظایف امروز','Today’s tasks','کارهای باقی‌مانده و فهرست وظایف','Remaining tasks and checklist','☷'],
  ['week','برنامه هفتگی','Weekly overview','نمای کلی برنامه هفته','Your week at a glance','▦'],
  ['progress','آمار پیشرفت','Progress','نمودار پیشرفت و درصد تکمیل','Progress chart and completion rate','↗'],
  ['habit','ردیاب عادت‌ها','Habit tracker','نمایش زنجیره و پیگیری عادت','Habit streak and check-ins','✓'],
  ['finance','خلاصه مالی','Finance summary','نمایش مانده و هزینه‌ها','Balance and spending snapshot','$'],
  ['calendar','تقویم امروز','Today calendar','تاریخ و برنامه روزانه','Date and daily schedule','▦'],
  ['quote','یادآور انگیزشی','Daily inspiration','یک یادآوری برای حفظ تمرکز','A small focus reminder','✦'],
  ['music','موسیقی تمرکز','Focus music','دسترسی سریع به فضای موسیقی','Quick access to calm music','♫'],
  ['streak','زنجیره تمرکز','Focus streak','نمایش روزهای پیوسته تمرکز','Your consistency streak','🔥'],
  ['minimal','ویجت مینیمال','Minimal widget','زمان و وضعیت در نمای جمع‌وجور','Time and status, kept simple','•']
 ];
 function preview(mode){
  const top='<div class="ffp-top"><span>FocusFlow</span><span class="ffp-mark">'+(modes.find(m=>m[0]===mode)?.[5]||'•')+'</span></div>';
  const task='<div class="ffp-task"><i class="ffp-check"></i><span>'+tr('مطالعه و تمرین','Study and practice')+'</span></div><div class="ffp-task"><i class="ffp-check"></i><span>'+tr('برنامه‌ریزی روز','Plan the day')+'</span></div>';
  let body='';
  if(mode==='timer'||mode==='minimal')body='<div class="ffp-big">25:00</div><div class="ffp-line" style="--w:72%"></div>';
  else if(mode==='tasks'||mode==='combined')body=(mode==='combined'?'<div class="ffp-big">25:00</div>':'<div class="ffp-big">3 <span style="font-size:9px;font-weight:500">'+tr('کار باقی‌مانده','left')+'</span></div>')+task;
  else if(mode==='week'||mode==='calendar')body='<div class="ffp-date">'+tr('امروز · شنبه','Today · Sat')+'</div><div class="ffp-dots">'+Array.from({length:21},()=>'<i></i>').join('')+'</div>';
  else if(mode==='progress')body='<div class="ffp-chart">'+[35,60,48,82,56,95,72].map(h=>'<i style="--h:'+h+'%"></i>').join('')+'</div><div class="ffp-line" style="--w:72%"></div>';
  else if(mode==='habit')body='<div class="ffp-pills"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="ffp-note">'+tr('۵ روز پیوسته ✨','5-day streak ✨')+'</div>';
  else if(mode==='finance')body='<div class="ffp-money">'+tr('۲۴۵٬۰۰۰','245,000')+'</div><div class="ffp-line" style="--w:42%"></div>';
  else if(mode==='quote')body='<div class="ffp-note">'+tr('قدم کوچک امروز، پیشرفت فرداست.','Small steps today. Progress tomorrow.')+'</div>';
  else if(mode==='music')body='<div class="ffp-note">♫ '+tr('موسیقی آرام برای تمرکز','Calm focus mix')+'</div><div class="ffp-pills"><i></i><i></i><i></i></div>';
  else if(mode==='streak')body='<div class="ffp-big">7 <span style="font-size:10px">🔥</span></div><div class="ffp-note">'+tr('روز تمرکز پیوسته','days focused')+'</div>';
  return '<div class="ff-widget-preview" aria-hidden="true">'+top+body+'</div>';
 }
 const backdrop=document.createElement('div');backdrop.id='ff-widget-backdrop';
 backdrop.innerHTML='<section id="ff-widget-dialog" role="dialog" aria-modal="true" aria-labelledby="ff-widget-title"><h2 id="ff-widget-title">'+tr('ویجت‌های FocusFlow','FocusFlow widgets')+'</h2><p>'+tr('طرح موردنظرت را از روی پیش‌نمایش انتخاب کن. این‌ها پیش‌نمایش طراحی هستند؛ ساخت ویجت واقعی به پشتیبانی نسخه اندرویدی نیاز دارد.','Choose a layout from its visual preview. These are design previews; creating a real home-screen widget requires a supported Android build.')+'</p><div id="ff-widget-options">'+modes.map(m=>'<button type="button" data-mode="'+m[0]+'" aria-pressed="false">'+preview(m[0])+'<strong>'+tr(m[1],m[2])+'</strong><small>'+tr(m[3],m[4])+'</small></button>').join('')+'</div><div id="ff-widget-status" role="status"></div><div id="ff-widget-actions"><button id="ff-widget-close" type="button">'+tr('بستن','Close')+'</button><button id="ff-widget-add" type="button">'+tr('افزودن به صفحه اصلی','Add to home screen')+'</button></div></section>';
 const menuGroup=document.querySelector('#menuOverlay .menu-workspace-group');
 const timerButton=document.getElementById('timerBtn');
 if(menuGroup){if(timerButton&&timerButton.parentElement===menuGroup)timerButton.insertAdjacentElement('afterend',launcher);else menuGroup.appendChild(launcher)}
 document.body.appendChild(backdrop);
 let mode=localStorage.getItem(KEY)||'combined';if(!modes.some(m=>m[0]===mode))mode='combined';
 const status=backdrop.querySelector('#ff-widget-status');
 function selectMode(m){if(!modes.some(x=>x[0]===m))m='combined';mode=m;backdrop.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===m)));localStorage.setItem(KEY,m)}
 selectMode(mode);
 function findTimer(){const candidates=[...document.querySelectorAll('[id*="timer" i],[class*="timer" i],[id*="pomodoro" i],[class*="pomodoro" i],[id*="countdown" i],[class*="countdown" i]')];for(const el of candidates){if(!el.getClientRects().length)continue;const m=esc(el.innerText||el.textContent).match(/(?:^|\D)(\d{1,2}):([0-5]\d)(?:\D|$)/);if(m)return m[1].padStart(2,'0')+':'+m[2]}const matches=(document.body.innerText||'').match(/\b\d{1,2}:[0-5]\d\b/g);return matches&&matches.length?matches[0]:'25:00'}
 function taskItems(){const selectors=['[data-task-id]','.task-item','.task-row','.todo-item','[class*="task-card"]','[class*="taskItem"]'];let nodes=[];for(const sel of selectors){try{nodes.push(...document.querySelectorAll(sel))}catch(e){}}nodes=[...new Set(nodes)].filter(el=>el.getClientRects().length&&!el.closest('#ff-widget-dialog')&&!el.matches('button,input,textarea,select'));const out=[];for(const el of nodes){const t=esc(el.innerText||el.textContent);if(!t||t.length>180||out.includes(t))continue;out.push(t)}return out.slice(0,12)}
 function completedCount(){let n=0;for(const sel of ['input[type="checkbox"]:checked','[aria-checked="true"]','[data-completed="true"]','.completed','.is-completed']){try{n=Math.max(n,document.querySelectorAll(sel).length)}catch(e){}}return n}
 function widgetCard(){const tasks=taskItems(),timer=findTimer(),done=completedCount(),total=Math.max(tasks.length,done),left=Math.max(0,total-done);let title='',value='',caption='',lines=[];
  switch(mode){
   case 'timer':title=tr('زمان‌سنج تمرکز','Focus timer');value=timer;caption=tr('برای یک جلسه تمرکز آماده شو','Ready for a focus session');lines=[{text:tr('تمرکز · استراحت · تکرار','Focus · break · repeat'),color:'#A995FF',bold:true,route:'/'}];break;
   case 'tasks':title=tr('کارهای امروز','Today’s tasks');value=String(left);caption=tr('کار باقی‌مانده','Tasks remaining');lines=tasks.slice(0,7).map(t=>({text:t.slice(0,95),marker:'•',route:'/'}));break;
   case 'combined':title=tr('تمرکز و وظایف','Focus + tasks');value=timer;caption=tr('تایمر و کارهای امروز','Timer and today’s tasks');lines=[{text:tr('کارهای باقی‌مانده: ','Tasks remaining: ')+left,color:'#A995FF',bold:true,route:'/'}].concat(tasks.slice(0,3).map(t=>({text:t.slice(0,95),marker:'•',route:'/'})));break;
   case 'week':title=tr('نمای هفتگی','Weekly overview');value=String(tasks.length);caption=tr('موارد قابل مشاهده','Visible items');lines=tasks.slice(0,6).map(t=>({text:t.slice(0,90),marker:'•',route:'/'}));break;
   case 'progress':title=tr('پیشرفت من','My progress');value=String(Math.max(0,Math.min(100,Math.round(done/Math.max(tasks.length,1)*100))) )+'%';caption=tr('نسبت کارهای تکمیل‌شده','Completion estimate');lines=[{text:tr('تکمیل‌شده: ','Completed: ')+done,color:'#A995FF',bold:true,route:'/'}];break;
   case 'habit':title=tr('ردیاب عادت‌ها','Habit tracker');value=tr('امروز','Today');caption=tr('یک قدم کوچک انجام بده','Make one small step');lines=[{text:tr('عادتت را در برنامه ثبت کن','Track your habit in the app'),color:'#A995FF',bold:true,route:'/'}];break;
   case 'finance':title=tr('خلاصه مالی','Finance summary');value='—';caption=tr('برای دیدن مانده وارد امور مالی شو','Open Finance to view balance');lines=[{text:tr('مقادیر مالی در پیش‌نمایش محاسبه نمی‌شوند','Financial values are not calculated in this preview'),route:'/'}];break;
   case 'calendar':title=tr('تقویم امروز','Today calendar');value=new Intl.DateTimeFormat(isFa()?'fa-IR':'en-US',{day:'numeric',month:'short'}).format(new Date());caption=tr('برنامه امروز','Today’s schedule');lines=tasks.slice(0,4).map(t=>({text:t.slice(0,90),marker:'•',route:'/'}));break;
   case 'quote':title=tr('یادآور تمرکز','Focus reminder');value='✦';caption=tr('قدم کوچک امروز، پیشرفت فرداست.','Small steps today. Progress tomorrow.');lines=[{text:tr('برنامه را باز کن و یک کار را شروع کن','Open the app and start one task'),route:'/'}];break;
   case 'music':title=tr('موسیقی تمرکز','Focus music');value='♫';caption=tr('فضای آرام برای تمرکز','A calm space to focus');lines=[{text:tr('برای پخش موسیقی برنامه را باز کن','Open the app to play music'),route:'/'}];break;
   case 'streak':title=tr('زنجیره تمرکز','Focus streak');value='✦';caption=tr('پیوستگی مهم‌تر از کمال است','Consistency over perfection');lines=[{text:tr('جلسه بعدی تمرکزت را شروع کن','Start your next focus session'),route:'/'}];break;
   default:title=tr('FocusFlow مینیمال','FocusFlow minimal');value=timer;caption=tr('یک نگاه سریع','A quick glance');lines=[{text:tr('آماده برای شروع','Ready when you are'),route:'/'}];
  }
  if(!lines.length)lines=[{text:tr('برنامه را باز کن تا جزئیات را ببینی','Open the app to see details'),route:'/'}];
  return {title,value,caption,lines:lines.slice(0,10),route:'/',bg:'#171820',ink:'#F6F4FF',accent:'#A995FF',textSize:'auto',align:'start',wrap:true};
 }
 async function saveWidget(){const api=window.AppMint&&window.AppMint.widget;if(!api||typeof api.set!=='function'){status.textContent=tr('این صفحه در مرورگر معمولی باز شده است. برای ساخت ویجت واقعی، فایل را با نسخه اندرویدی پشتیبانی‌شده اجرا کن.','AppMint widget API is unavailable in this browser. Open the app in a supported AppMint Android build to create a native widget.');return false}status.textContent=tr('در حال آماده‌سازی ویجت…','Preparing widget…');try{const result=await api.set(widgetCard());if(result&&result.ok===false){status.textContent=tr('ساخت ویجت ناموفق بود: ','Could not create widget: ')+(result.error||'unknown error');return false}if(result===false){status.textContent=tr('نسخه فعلی اپ از این ویجت پشتیبانی نمی‌کند.','This app build does not support this widget.');return false}let opened=false;try{opened=await api.requestPin()}catch(e){}status.textContent=opened?tr('ویجت آماده است؛ جای آن را در صفحه اصلی انتخاب کن.','Widget is ready; choose its position on the home screen.'):tr('محتوا ذخیره شد. صفحه اصلی گوشی را نگه دار و از بخش Widgets ویجت FocusFlow را اضافه کن.','Widget content saved. Long-press the home screen and add FocusFlow from Widgets.');return true}catch(e){status.textContent=tr('خطا در آماده‌سازی ویجت.','Could not prepare widget.');return false}}
 launcher.addEventListener('click',()=>{selectMode(localStorage.getItem(KEY)||'combined');backdrop.classList.add('ff-open')});
 backdrop.querySelector('#ff-widget-close').addEventListener('click',()=>backdrop.classList.remove('ff-open'));
 backdrop.addEventListener('click',e=>{if(e.target===backdrop)backdrop.classList.remove('ff-open')});
 backdrop.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>selectMode(b.dataset.mode)));
 backdrop.querySelector('#ff-widget-add').addEventListener('click',saveWidget);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')backdrop.classList.remove('ff-open')});
 let last='';function refreshIfChanged(){if(!(window.AppMint&&AppMint.widget&&typeof AppMint.widget.set==='function'))return;const card=widgetCard(),signature=JSON.stringify(card);if(signature===last)return;last=signature;try{AppMint.widget.set(card)}catch(e){}}
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshIfChanged()});
 const observer=new MutationObserver(()=>{clearTimeout(window.__ffWidgetRefreshTimer);window.__ffWidgetRefreshTimer=setTimeout(refreshIfChanged,900)});
 window.addEventListener('load',()=>{try{observer.observe(document.body,{subtree:true,childList:true,characterData:true})}catch(e){}refreshIfChanged()});
})();
