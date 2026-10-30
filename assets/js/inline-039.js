

(()=>{
 'use strict';
 const root=document.getElementById('bonfire-native-root');
 const fa=()=>String(document.documentElement.lang||'en').toLowerCase().startsWith('fa');
 const lang=()=>fa()?'fa':'en';
 const tr=(en,faText)=>fa()?faText:en;
 const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const digits=value=>String(value??'').replace(/[۰-۹٠-٩]/g,d=>String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)>=0?'۰۱۲۳۴۵۶۷۸۹'.indexOf(d):'٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
 const numberOf=value=>{const n=Number(digits(String(value??'').replace(/[^0-9۰-۹٠-٩.-]/g,'')));return Number.isFinite(n)?n:0};
 const perfLite=()=>document.documentElement.classList.contains('perf-lite')||localStorage.getItem('focusflow-perf')==='lite'||window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 function syncNamesAndIcons(){
   const isFa=fa(),label=isFa?'آتشگاه':'Bonfire';
   const nav=document.querySelector('.bottomnav .bonfire-top-link');
   const menu=document.getElementById('bonfireOpen');
   /* The host navbar is the source of truth for the Bonfire icon. Never replace its icon with the page's artwork. */
   const navIcon=nav?.querySelector('svg');
   const syncIcon=(button)=>{
     if(!button||!navIcon)return;
     const existing=button.querySelector('svg, .bonfire-shared-logo, i[data-lucide]');
     if(existing)existing.remove();
     const clone=navIcon.cloneNode(true);clone.classList.add('bonfire-shared-logo');clone.setAttribute('aria-hidden','true');clone.removeAttribute('aria-label');
     button.insertBefore(clone,button.firstChild);
   };
   [menu].forEach(syncIcon);
   if(root){
     root.lang=isFa?'fa':'en';root.dir=isFa?'rtl':'ltr';root.classList.toggle('is-persian',isFa);
     const h=root.querySelector('.top .brand h1');if(h)h.textContent=label;
     const logo=root.querySelector('.top .logo');if(logo&&navIcon){const existing=logo.querySelector('svg, .pv-vault-logo, img');if(existing)existing.remove();const clone=navIcon.cloneNode(true);clone.classList.add('bonfire-shared-logo');clone.setAttribute('aria-hidden','true');logo.appendChild(clone);}
     const imgs=root.querySelectorAll('.pv-bonfire-logo');imgs.forEach(img=>img.alt=isFa?'نشان آتشگاه':'Bonfire logo');
   }
   [nav,menu].forEach(button=>{if(!button)return;const span=button.querySelector('span');if(span)span.textContent=label;button.setAttribute('aria-label',label);button.setAttribute('title',label);});
   const plannerNav=document.querySelector('.navbtn[data-page="planner"] span');if(plannerNav)plannerNav.textContent=isFa?'برنامه‌ریزی':'Planner';
   const plannerTitle=document.getElementById('plannerProjectTitle');if(plannerTitle&&isFa&&/^(My planner|Planner)$/.test(plannerTitle.textContent.trim()))plannerTitle.textContent='برنامه‌ریزی';
   const plannerLabel=document.querySelector('#plannerPage .pl-projectbar label');if(plannerLabel){const first=plannerLabel.firstChild;if(first&&first.nodeType===3)first.textContent=isFa?'برنامه‌ریزی':'Plan ';}
   const perfBtn=document.getElementById('settingsPerfBtn');if(perfBtn){const colorInputs=root?.querySelectorAll('input[type="color"]')||[];colorInputs.forEach(inp=>{const name=isFa?'انتخاب رنگ برچسب':'Choose tag color';inp.title=name;inp.setAttribute('aria-label',name);});}
 }
 function ensureMobileIntro(){
   if(!root)return;
   let intro=root.querySelector('.bf-page-intro');
   if(!intro){intro=document.createElement('section');intro.className='bf-page-intro';intro.setAttribute('aria-labelledby','bfIntroTitle');intro.innerHTML='<h2 id="bfIntroTitle"></h2><p id="bfIntroDescription"></p>';const top=root.querySelector('.top');if(top)top.insertAdjacentElement('afterend',intro);else root.prepend(intro);}
   const h=intro.querySelector('h2'),p=intro.querySelector('p');
   if(h)h.textContent=tr('Bonfire','آتشگاه');
   if(p)p.textContent=tr('Organize, discover, and reuse your AI prompts in one place.','پرامپت‌های هوش مصنوعی‌ات را دسته‌بندی کن، سریع پیدا کن و دوباره استفاده کن.');
 }

 function ensureDeleteModal(){
   if(!root||root.querySelector('#ffPromptDeleteConfirm'))return;
   const overlay=document.createElement('div');overlay.className='modalback ff-delete-confirm';overlay.id='ffPromptDeleteConfirm';overlay.setAttribute('aria-hidden','true');
   overlay.innerHTML='<div class="modal" role="dialog" aria-modal="true" aria-labelledby="ffPromptDeleteTitle" aria-describedby="ffPromptDeleteMessage"><div class="ff-delete-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5"/></svg></div><h2 id="ffPromptDeleteTitle"></h2><p id="ffPromptDeleteMessage"></p><div class="ff-delete-actions"><button class="ff-delete-cancel" type="button" data-delete-cancel></button><button class="ff-delete-ok" type="button" data-delete-confirm></button></div></div>';
   root.appendChild(overlay);
   const renderText=()=>{const title=overlay.querySelector('#ffPromptDeleteTitle'),message=overlay.querySelector('#ffPromptDeleteMessage'),cancel=overlay.querySelector('[data-delete-cancel]'),ok=overlay.querySelector('[data-delete-confirm]');if(title)title.textContent=tr('Delete prompt?','حذف پرامپت؟');if(message)message.textContent=tr('This prompt will be permanently deleted. This action cannot be undone.','این پرامپت برای همیشه حذف می‌شود و امکان بازگردانی آن وجود ندارد.');if(cancel)cancel.textContent=tr('Cancel','لغو');if(ok)ok.textContent=tr('Delete prompt','حذف پرامپت');};
   let resolver=null;
   const close=answer=>{overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');const resolve=resolver;resolver=null;if(resolve)resolve(!!answer);};
   overlay.querySelector('[data-delete-cancel]').addEventListener('click',()=>close(false));
   overlay.querySelector('[data-delete-confirm]').addEventListener('click',()=>close(true));
   overlay.addEventListener('click',e=>{if(e.target===overlay)close(false)});
   document.addEventListener('keydown',e=>{if(!overlay.classList.contains('open'))return;if(e.key==='Escape'){e.preventDefault();close(false)}if(e.key==='Enter'&&e.target===overlay){e.preventDefault();close(false)}});
   window.__ffConfirmPromptDelete=()=>new Promise(resolve=>{if(resolver){resolver(false);resolver=null;}renderText();resolver=resolve;overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');requestAnimationFrame(()=>overlay.querySelector('[data-delete-cancel]')?.focus());});
   window.__ffRefreshPromptDeleteLanguage=renderText;
 }

 function ensureInsightPanel(){
   const page=document.getElementById('progressPage');if(!page||page.querySelector('.ff-workspace-insights'))return page?.querySelector('.ff-workspace-insights');
   const card=document.createElement('section');card.className='card ff-workspace-insights';card.id='ffWorkspaceInsights';card.setAttribute('aria-labelledby','ffInsightsTitle');
   card.innerHTML='<div class="ff-insight-head"><div><h2 id="ffInsightsTitle"></h2><p id="ffInsightsSubtitle"></p></div><span class="ff-insight-badge" id="ffInsightBadge"></span></div><div class="ff-insight-tabs" role="tablist" aria-label="Workspace insights"><button class="ff-insight-tab" type="button" role="tab" data-insight-tab="finance" aria-selected="false"></button><button class="ff-insight-tab" type="button" role="tab" data-insight-tab="planner" aria-selected="true"></button><button class="ff-insight-tab" type="button" role="tab" data-insight-tab="bonfire" aria-selected="false"></button></div><div id="ffInsightContent" aria-live="polite"></div>';
   page.appendChild(card);
   card.addEventListener('click',e=>{const b=e.target.closest('[data-insight-tab]');if(b){insightMode=b.dataset.insightTab;renderInsightPanel();return;}if(e.target.closest('[data-insight-unlock]')){if(typeof window.showPage==='function')window.showPage('finance');}});
   return card;
 }
 let insightMode='planner';
 const nf=(n,decimals=0)=>{try{return new Intl.NumberFormat(fa()?'fa-IR':'en-US',{maximumFractionDigits:decimals,minimumFractionDigits:decimals}).format(Number(n)||0)}catch{return String(n)}};
 const fmtDate=value=>{if(!value)return '—';try{return new Intl.DateTimeFormat(fa()?'fa-IR-u-ca-persian-nu-arabext':'en-US-u-ca-gregory-nu-latn',{month:'short',day:'numeric'}).format(new Date(value+'T12:00:00'))}catch{return String(value)}};
 const table=(heads,rows)=>rows.length?`<div class="ff-insight-table-wrap"><table class="ff-insight-table"><thead><tr>${heads.map(x=>`<th scope="col">${escapeHtml(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:`<p class="ff-insight-empty">${tr('No records to show yet. Add an item to see its chart and table here.','هنوز داده‌ای برای نمایش وجود ندارد. موردی اضافه کن تا نمودار و جدول آن اینجا نمایش داده شود.')}</p>`;
 const metric=(label,value)=>`<div class="ff-insight-metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
 const bars=(items,color='#4f97f5')=>items.length?`<div class="ff-insight-bars">${items.map(item=>{const max=Math.max(1,...items.map(i=>Math.max(0,Number(i.value)||0)));const width=Math.max(0,Math.min(100,(Number(item.value)||0)/max*100));return `<div class="ff-insight-bar-row"><span class="ff-label">${escapeHtml(item.label)}</span><b>${escapeHtml(item.display??nf(item.value))}</b><span class="ff-insight-track"><span style="width:${width}%;--bar-color:${escapeHtml(item.color||color)}"></span></span></div>`}).join('')}</div>`:`<p class="ff-insight-empty">${tr('No chart data yet.','هنوز داده‌ای برای نمودار وجود ندارد.')}</p>`;
 const money=(amount,currency)=>{try{if(typeof formatMoney==='function')return formatMoney(amount,currency)}catch{}return `${nf(amount,2)} ${currency||''}`.trim()};
 function financeInsight(){
   const all=typeof financeEntries!=='undefined'&&Array.isArray(financeEntries)?financeEntries:[];
   const currency=typeof activeFinanceCurrency==='function'?activeFinanceCurrency():(fa()?'IRR':'USD');
   const canSee=typeof financeAccessGranted!=='undefined'&&!!financeAccessGranted;
   if(!canSee)return {badge:tr('Protected','محافظت‌شده'),body:`<div class="ff-insight-unlock"><p>${tr('Finance insights are protected. Open Finance to unlock the transaction table and charts.','اطلاعات مالی محافظت شده‌اند. برای نمایش جدول تراکنش‌ها و نمودارها، ابتدا وارد بخش امور مالی شو.')}</p><button type="button" data-insight-unlock>${tr('Open Finance','ورود به امور مالی')}</button></div>`};
   const month=typeof financeCurrentMonth==='function'?financeCurrentMonth():new Date().toISOString().slice(0,7);
   const current=all.filter(x=>{let period;try{period=typeof financePeriodKey==='function'?financePeriodKey(x.date):String(x.date||'').slice(0,7)}catch{period=String(x.date||'').slice(0,7)}return period===month&&((typeof financeTransactionCurrency==='function'?financeTransactionCurrency(x):x.currency||currency)===currency)});
   const income=current.filter(x=>x.type==='income').reduce((n,x)=>n+(Number(x.amount)||0),0);
   const expenses=current.filter(x=>x.type==='expense').reduce((n,x)=>n+(Number(x.amount)||0),0);
   const balance=income-expenses;
   const categoryMap=new Map();
   current.filter(x=>x.type==='expense').forEach(x=>{const key=String(x.category||'other');categoryMap.set(key,(categoryMap.get(key)||0)+(Number(x.amount)||0));});
   const catItems=[...categoryMap.entries()].map(([id,value])=>{let label=id,color='#4f97f5';try{const c=typeof financeCategory==='function'?financeCategory(id):null;if(c){label=fa()&&typeof financeCategoryFa==='function'?financeCategoryFa(id):c.name;color=c.color||color;}}catch{}return {label,value,display:money(value,currency),color}}).sort((a,b)=>b.value-a.value).slice(0,7);
   const recent=[...current].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))).slice(0,6).map(x=>{
     let category=x.type==='income'?tr('Income','درآمد'):tr('Expense','هزینه');
     if(x.type==='expense')try{const c=typeof financeCategory==='function'?financeCategory(x.category):null;category=fa()&&typeof financeCategoryFa==='function'?financeCategoryFa(x.category):(c?.name||x.category||tr('Expense','هزینه'))}catch{}
     return [escapeHtml(fmtDate(x.date)),escapeHtml(x.title||category),escapeHtml(x.type==='income'?tr('Income','درآمد'):tr('Expense','هزینه')),escapeHtml(money((x.type==='expense'?-1:1)*(Number(x.amount)||0),currency))];
   });
   return {badge:tr('Current month','ماه جاری'),body:`<div class="ff-insight-metrics">${metric(tr('Income','درآمد'),money(income,currency))}${metric(tr('Expenses','هزینه‌ها'),money(expenses,currency))}${metric(tr('Balance','مانده'),money(balance,currency))}</div><div class="ff-insight-split"><section class="ff-insight-pane"><h3>${tr('Expenses by category','هزینه‌ها به تفکیک دسته')}</h3>${bars(catItems)}</section><section class="ff-insight-pane"><h3>${tr('Recent transactions','تراکنش‌های اخیر')}</h3>${table([tr('Date','تاریخ'),tr('Title','عنوان'),tr('Type','نوع'),tr('Amount','مبلغ')],recent)}</section></div>`};
 }
 function plannerInsight(){
   const items=typeof planner!=='undefined'&&planner&&Array.isArray(planner.entries)?planner.entries.filter(x=>x.projectId===planner.activeProject):[];
   const total=items.length,done=items.filter(x=>x.done||x.status==='completed').length,inProgress=items.filter(x=>x.status==='inprogress'&&!x.done).length;
   const today=new Date();const todayKey=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
   const overdue=items.filter(x=>!x.done&&x.status!=='completed'&&x.date&&x.date<todayKey).length;
   const pending=Math.max(0,total-done-inProgress);
   const chart=[{label:tr('Completed','تکمیل‌شده'),value:done,color:'#10b981'},{label:tr('In progress','در حال انجام'),value:inProgress,color:'#4f97f5'},{label:tr('Not started','شروع‌نشده'),value:pending,color:'#a78bfa'},{label:tr('Overdue','عقب‌افتاده'),value:overdue,color:'#e5484d'}];
   const recent=[...items].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||''))).slice(0,7).map(x=>[escapeHtml(x.title||tr('Untitled','بدون عنوان')),escapeHtml(fmtDate(x.date)),escapeHtml(x.done||x.status==='completed'?tr('Completed','تکمیل‌شده'):x.status==='inprogress'?tr('In progress','در حال انجام'):tr('Not started','شروع‌نشده'))]);
   return {badge:tr('Planner','برنامه‌ریز'),body:`<div class="ff-insight-metrics">${metric(tr('Total items','کل موارد'),nf(total))}${metric(tr('Completed','تکمیل‌شده'),nf(done))}${metric(tr('Overdue','عقب‌افتاده'),nf(overdue))}</div><div class="ff-insight-split"><section class="ff-insight-pane"><h3>${tr('Plan status','وضعیت برنامه‌ها')}</h3>${bars(chart)}</section><section class="ff-insight-pane"><h3>${tr('Plan table','جدول برنامه‌ها')}</h3>${table([tr('Item','مورد'),tr('Date','تاریخ'),tr('Status','وضعیت')],recent)}</section></div>`};
 }
 function bonfireInsight(){
   const stat=id=>numberOf(root?.querySelector('#'+id)?.textContent||0);
   const promptTotal=stat('statPrompts'),favorites=stat('statFavs'),copies=stat('statCopies');
   const tagRows=[...(root?.querySelectorAll('#tagRow button[data-tag]')||[])].filter(b=>!['all','favorites'].includes(String(b.dataset.tag))).map(b=>{
     const clone=b.cloneNode(true);clone.querySelectorAll('small,svg,i,.lucide').forEach(el=>el.remove());
     const label=clone.textContent.trim();const count=numberOf(b.querySelector('small')?.textContent||0);return {label:label||tr('Tag','برچسب'),value:count};
   });
   const top=[...tagRows].sort((a,b)=>b.value-a.value).slice(0,7);
   const rows=top.map(x=>[escapeHtml(x.label),nf(x.value),`${nf(promptTotal?Math.round(x.value/promptTotal*100):0)}%`]);
   const isLoaded=!!root?.querySelector('#tagRow');
   const body=`<div class="ff-insight-metrics">${metric(tr('Saved prompts','پرامپت‌های ذخیره‌شده'),nf(promptTotal))}${metric(tr('Favorites','علاقه‌مندی‌ها'),nf(favorites))}${metric(tr('Copies','دفعات کپی'),nf(copies))}</div><div class="ff-insight-split"><section class="ff-insight-pane"><h3>${tr('Prompts by tag','پرامپت‌ها به تفکیک برچسب')}</h3>${bars(top)}</section><section class="ff-insight-pane"><h3>${tr('Tag table','جدول برچسب‌ها')}</h3>${isLoaded?table([tr('Tag','برچسب'),tr('Prompts','پرامپت‌ها'),tr('Share','سهم')],rows):`<p class="ff-insight-empty">${tr('Open Bonfire once to load its local library statistics.','برای بارگذاری آمار کتابخانهٔ محلی، یک‌بار آتشگاه را باز کن.')}</p>`}</section></div>`;
   return {badge:tr('Bonfire','آتشگاه'),body};
 }
 function renderInsightPanel(){
   const card=ensureInsightPanel();if(!card)return;
   const title=card.querySelector('#ffInsightsTitle'),subtitle=card.querySelector('#ffInsightsSubtitle'),badge=card.querySelector('#ffInsightBadge'),content=card.querySelector('#ffInsightContent');
   if(title)title.textContent=tr('Workspace insights','آمار بخش‌های برنامه');
   if(subtitle)subtitle.textContent=tr('Tables and charts from your saved Finance, Planner and Bonfire data.','جدول‌ها و نمودارها بر پایهٔ داده‌های ذخیره‌شده در امور مالی، برنامه‌ریز و آتشگاه.');
   const names={finance:tr('Finance','امور مالی'),planner:tr('Planner','برنامه‌ریز'),bonfire:tr('Bonfire','آتشگاه')};
   card.querySelectorAll('[data-insight-tab]').forEach(b=>{const k=b.dataset.insightTab;b.textContent=names[k]||k;b.setAttribute('aria-selected',String(k===insightMode));b.tabIndex=k===insightMode?0:-1;});
   let result;try{result=insightMode==='finance'?financeInsight():insightMode==='bonfire'?bonfireInsight():plannerInsight()}catch(error){console.error('Workspace insights update failed:',error);result={badge:tr('Unavailable','در دسترس نیست'),body:`<p class="ff-insight-empty">${tr('These insights could not be read right now. Reopen this section and try again.','در حال حاضر خواندن این آمار ممکن نشد. این بخش را دوباره باز کن و تلاش کن.')}</p>`};}
   if(badge)badge.textContent=result.badge;
   if(content)content.innerHTML=result.body;
 }

 function syncMotionMode(){if(!root)return;root.classList.toggle('ff-reduced-motion',perfLite());}
 function animateBonfire(){
   if(!root||!document.getElementById('bonfirePage')?.classList.contains('active'))return;
   if(perfLite()||!window.gsap){syncMotionMode();root.querySelectorAll('.top,.bf-page-intro,.tagrow-wrap,.sectionhead,#cards>.promptcard,#cards>.empty').forEach(el=>{el.style.removeProperty('transform');el.style.removeProperty('opacity')});return;}
   syncMotionMode();
   try{window.gsap.killTweensOf(root.querySelectorAll('.top,.bf-page-intro,.tagrow-wrap,.sectionhead,#cards>.promptcard,#cards>.empty'));
     window.gsap.fromTo(root.querySelectorAll('.top,.bf-page-intro,.tagrow-wrap,.sectionhead'),{y:10,opacity:0},{y:0,opacity:1,duration:.34,stagger:.035,ease:'power2.out',clearProps:'transform,opacity'});
     window.gsap.fromTo(root.querySelectorAll('#cards>.promptcard,#cards>.empty'),{y:13,opacity:0},{y:0,opacity:1,duration:.38,stagger:.045,ease:'power2.out',delay:.08,clearProps:'transform,opacity'});
   }catch(e){root.querySelectorAll('.top,.bf-page-intro,.tagrow-wrap,.sectionhead,#cards>.promptcard,#cards>.empty').forEach(el=>{el.style.removeProperty('transform');el.style.removeProperty('opacity')});}
 }

  function enhanceHomeTagScrolling(){
    const strips=[document.querySelector('#homePage #tagStrip'),document.querySelector('#bonfire-native-root #tagRow')].filter(Boolean);
    strips.forEach(strip=>{
      if(strip.dataset.ffV55SmoothScroll==='1')return;
      strip.dataset.ffV55SmoothScroll='1';
      let target=strip.scrollLeft,raf=0;
      const rtl=()=>getComputedStyle(strip).direction==='rtl';
      const bounds=()=>{const max=Math.max(0,strip.scrollWidth-strip.clientWidth);return rtl()?{min:-max,max:0}:{min:0,max};};
      const stop=()=>{if(raf)cancelAnimationFrame(raf);raf=0;};
      const animate=()=>{
        const delta=target-strip.scrollLeft;
        if(Math.abs(delta)<0.65){strip.scrollLeft=target;raf=0;return;}
        strip.scrollLeft+=delta*0.20;
        raf=requestAnimationFrame(animate);
      };
      strip.addEventListener('wheel',e=>{
        if(e.ctrlKey||e.metaKey||strip.scrollWidth<=strip.clientWidth+1)return;
        const raw=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
        if(!raw)return;
        const unit=e.deltaMode===1?16:e.deltaMode===2?Math.max(160,strip.clientWidth*.6):1;
        const b=bounds();if(!raf)target=strip.scrollLeft;
        const logical=raw*1.05*(rtl()?-1:1);
        const next=Math.max(b.min,Math.min(b.max,target+logical*unit));
        if(Math.abs(next-target)<0.5&&Math.abs(next-strip.scrollLeft)<1)return;
        target=next;e.preventDefault();e.stopImmediatePropagation();
        if(!raf)raf=requestAnimationFrame(animate);
      },{passive:false,capture:true});
      strip.addEventListener('keydown',e=>{
        if(!['ArrowLeft','ArrowRight','Home','End','PageUp','PageDown'].includes(e.key)||strip.scrollWidth<=strip.clientWidth+1)return;
        e.preventDefault();e.stopImmediatePropagation();const b=bounds();if(!raf)target=strip.scrollLeft;
        const amount=Math.max(100,Math.min(210,strip.clientWidth*.38));
        if(e.key==='Home')target=rtl()?b.max:0;
        else if(e.key==='End')target=b.min===0?b.max:b.min;
        else {const sign=e.key==='ArrowLeft'?-1:e.key==='ArrowRight'?1:e.key==='PageUp'?-1:1;target=Math.max(b.min,Math.min(b.max,target+sign*amount*(rtl()?-1:1)));}
        stop();raf=requestAnimationFrame(animate);
      },true);
      strip.addEventListener('pointerdown',()=>{if(raf)stop();},{passive:true});
    });
  }
  function refreshAll(){syncNamesAndIcons();ensureMobileIntro();ensureDeleteModal();ensureInsightPanel();syncMotionMode();renderInsightPanel();}
 refreshAll();enhanceHomeTagScrolling();
 document.addEventListener('click',e=>{
   const target=e.target;
   if(target.closest('.bottomnav .bonfire-top-link,#bonfireOpen,[data-page="bonfire"]'))requestAnimationFrame(animateBonfire);
   if(target.closest('[data-language-choice],[data-settings-home]'))requestAnimationFrame(refreshAll);
   if(target.closest('[data-insight-tab]'))requestAnimationFrame(renderInsightPanel);
   if(target.closest('[data-insight-unlock]'))requestAnimationFrame(()=>{renderInsightPanel();});
   if(target.closest('#settingsPerfBtn,#perfBtn'))requestAnimationFrame(()=>{syncMotionMode();});
   if(target.closest('[data-color]'))requestAnimationFrame(syncNamesAndIcons);
   if(target.closest('[data-language-choice]'))requestAnimationFrame(renderInsightPanel);
   if(target.closest('[data-page="progress"]'))requestAnimationFrame(renderInsightPanel);
 },true);
 document.addEventListener('change',e=>{if(e.target.matches('[data-color]'))syncNamesAndIcons();});
 document.addEventListener('bonfire-prompts-updated',renderInsightPanel);
 window.addEventListener('bonfire-language-change',()=>{syncNamesAndIcons();ensureMobileIntro();window.__ffRefreshPromptDeleteLanguage?.();renderInsightPanel();});
 const htmlObserver=new MutationObserver(()=>{syncNamesAndIcons();ensureMobileIntro();window.__ffRefreshPromptDeleteLanguage?.();syncMotionMode();});
 htmlObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir','class','data-theme']});
 if(root){const rootObserver=new MutationObserver(records=>{let relevant=false;for(const record of records){if(record.target?.closest?.('#tagRow,#cards,#tagManageList')){relevant=true;break;}if([...record.addedNodes||[]].some(n=>n.nodeType===1&&(n.matches?.('#tagRow,#cards,#tagManageList')||n.querySelector?.('#tagRow,#cards,#tagManageList')))){relevant=true;break;}}if(relevant&&document.getElementById('progressPage')?.classList.contains('active'))requestAnimationFrame(renderInsightPanel);});rootObserver.observe(root,{subtree:true,childList:true,characterData:true});}
 // Update the cross-page panel after FocusFlow refreshes progress or changes locale/data.
 if(typeof window.renderProgress==='function'&&!window.renderProgress.__ffV53Wrapped){const original=window.renderProgress;const wrapped=function(){const result=original.apply(this,arguments);requestAnimationFrame(renderInsightPanel);return result;};wrapped.__ffV53Wrapped=true;window.renderProgress=wrapped;}
 // Also watch for visits made through code paths other than navigation buttons.
 const activeObserver=new MutationObserver(()=>{if(document.getElementById('bonfirePage')?.classList.contains('active'))requestAnimationFrame(animateBonfire);if(document.getElementById('progressPage')?.classList.contains('active'))requestAnimationFrame(renderInsightPanel);});
 ['bonfirePage','progressPage'].forEach(id=>{const el=document.getElementById(id);if(el)activeObserver.observe(el,{attributes:true,attributeFilter:['class']});});
})();

