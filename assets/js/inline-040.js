

(()=>{
 const html=document.documentElement;
 const isFa=()=>html.lang.toLowerCase().startsWith('fa')||html.dir==='rtl'||localStorage.getItem('focusflow-language')==='fa';
 function refine(){
   const fa=isFa(),label=fa?'آتشگاه':'Bonfire';
   const nav=document.querySelector('.bottomnav .bonfire-top-link');
   const navIcon=nav?.querySelector('svg');
   const root=document.querySelector('#bonfirePage #bonfire-native-root');
   if(root){
     root.lang=fa?'fa':'en';root.dir=fa?'rtl':'ltr';root.classList.toggle('is-persian',fa);
     root.querySelectorAll('.empty,.empty-state').forEach(el=>{if(!el.querySelector('.covericon,.big,.empty-tag-icon'))return;el.style.textAlign='center';el.style.alignItems='center';el.style.justifyContent='center';el.style.width='100%';});
     root.querySelectorAll('.toolbar').forEach(el=>{el.style.direction=fa?'rtl':'ltr';el.style.justifyContent='flex-start';});
     const h=root.querySelector('.top .brand h1');if(h)h.textContent=label;
     const logo=root.querySelector('.top .logo');if(logo&&navIcon){const old=logo.querySelector('svg, .pv-vault-logo, img');if(old)old.remove();const clone=navIcon.cloneNode(true);clone.classList.add('bonfire-shared-logo');clone.setAttribute('aria-hidden','true');logo.appendChild(clone);}
   }
   const menu=document.getElementById('bonfireOpen');
   [nav,menu].forEach(button=>{if(!button)return;const span=button.querySelector('span');if(span)span.textContent=label;button.setAttribute('aria-label',label);button.setAttribute('title',label);});
   if(menu&&navIcon){const old=menu.querySelector('svg, .bonfire-shared-logo, i[data-lucide]');if(old)old.remove();const clone=navIcon.cloneNode(true);clone.classList.add('bonfire-shared-logo');clone.setAttribute('aria-hidden','true');menu.insertBefore(clone,menu.firstChild);}
   const plannerNav=document.querySelector('.navbtn[data-page="planner"] span');if(plannerNav)plannerNav.textContent=fa?'برنامه‌ریزی':'Planner';
   const plannerTitle=document.getElementById('plannerProjectTitle');if(plannerTitle&&/^(My planner|Planner|برنامه‌ریز|پلنر|آتیشگاه)$/.test(plannerTitle.textContent.trim()))plannerTitle.textContent=fa?'برنامه‌ریزی':'My planner';
   const labelEl=document.querySelector('#plannerPage .pl-projectbar label');if(labelEl){const text=Array.from(labelEl.childNodes).find(n=>n.nodeType===3);if(text)text.textContent=fa?'برنامه‌ریزی':'Plan ';}
   const select=document.querySelector('#bonfirePage #bonfire-native-root .toolbar .ff-select-trigger .ff-select-value');if(select){select.style.whiteSpace='nowrap';select.style.overflow='visible';select.style.textOverflow='clip';}
   const progress=document.getElementById('progressPage'),insights=document.getElementById('ffWorkspaceInsights');if(progress&&insights&&insights.parentElement===progress)progress.appendChild(insights);
 }
 refine();
 const observer=new MutationObserver(()=>refine());observer.observe(html,{attributes:true,attributeFilter:['lang','dir']});
 document.addEventListener('click',e=>{if(e.target.closest('[data-page="bonfire"],#bonfireOpen,[data-language-choice]'))requestAnimationFrame(refine);},true);
 document.addEventListener('change',e=>{if(e.target.matches('#plannerProjectSelect'))requestAnimationFrame(refine);},true);
})();

