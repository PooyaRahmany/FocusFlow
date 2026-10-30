

(()=>{
 'use strict';
 const menu=document.createElement('div');menu.className='ff-select-menu';menu.id='ff-select-menu';menu.setAttribute('role','listbox');document.body.appendChild(menu);
 let active=null, activeTrigger=null;
 const labelFor=(sel,opt)=>{if(!opt)return '';const t=(opt.textContent||'').trim();return t||opt.value||''};
 function refresh(sel){
  if(!sel||!sel.isConnected||sel.multiple||sel.size>1)return;
  let shell=sel.nextElementSibling;
  if(!shell||!shell.classList.contains('ff-select-shell')){
   shell=document.createElement('div');shell.className='ff-select-shell';
   const trigger=document.createElement('button');trigger.type='button';trigger.className='ff-select-trigger';trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');
   const value=document.createElement('span');value.className='ff-select-value';
   const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.classList.add('ff-select-chevron');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','m6 9 6 6 6-6');path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','2');path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');svg.appendChild(path);trigger.append(value,svg);shell.appendChild(trigger);sel.insertAdjacentElement('afterend',shell);
   trigger.addEventListener('click',()=>{if(active===sel){close();return}open(sel,trigger)});
   sel.classList.add('ff-native-select');
  }
  const trigger=shell.querySelector('.ff-select-trigger');if(!trigger)return;
  trigger.disabled=!!sel.disabled;trigger.setAttribute('aria-label',sel.getAttribute('aria-label')||sel.labels?.[0]?.textContent?.trim()||'Choose an option');
  const selected=sel.options[sel.selectedIndex];shell.querySelector('.ff-select-value').textContent=labelFor(sel,selected)||'—';
  if(active===sel)buildOptions(sel);
 }
 function buildOptions(sel){menu.replaceChildren();Array.from(sel.options).forEach((opt,index)=>{
  if(opt.hidden||opt.disabled&&opt.value==='')return;
  const b=document.createElement('button');b.type='button';b.className='ff-select-option';b.setAttribute('role','option');b.setAttribute('aria-selected',String(index===sel.selectedIndex));b.disabled=!!opt.disabled;
  const txt=document.createElement('span');txt.style.minWidth='0';txt.style.flex='1';txt.textContent=labelFor(sel,opt);b.appendChild(txt);
  if(index===sel.selectedIndex){const check=document.createElementNS('http://www.w3.org/2000/svg','svg');check.setAttribute('viewBox','0 0 24 24');check.classList.add('ff-select-check');check.setAttribute('aria-hidden','true');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','m5 12 4 4L19 6');path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','2.5');path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');check.appendChild(path);b.appendChild(check)}
  b.addEventListener('click',()=>{if(opt.disabled)return;sel.selectedIndex=index;sel.dispatchEvent(new Event('input',{bubbles:true}));sel.dispatchEvent(new Event('change',{bubbles:true}));refresh(sel);close();});menu.appendChild(b);
 });}
 function place(trigger){const r=trigger.getBoundingClientRect(),pad=8;menu.style.minWidth=Math.min(Math.max(r.width,160),window.innerWidth-pad*2)+'px';menu.style.maxWidth=(window.innerWidth-pad*2)+'px';menu.style.left=Math.max(pad,Math.min(r.left,window.innerWidth-menu.offsetWidth-pad))+'px';menu.style.top='0px';const h=Math.min(menu.scrollHeight,Math.min(320,window.innerHeight*.45));const below=window.innerHeight-r.bottom;let top=below>=Math.min(h,180)||below>=r.top?Math.min(r.bottom+5,window.innerHeight-h-pad):Math.max(pad,r.top-h-5);if(top+h>window.innerHeight-pad)top=window.innerHeight-h-pad;menu.style.top=Math.max(pad,top)+'px';}
 function open(sel,trigger){close();active=sel;activeTrigger=trigger;buildOptions(sel);menu.dataset.open='true';trigger.setAttribute('aria-expanded','true');place(trigger);const selected=menu.querySelector('[aria-selected="true"]');if(selected)selected.scrollIntoView({block:'nearest'});}
 function close(){if(activeTrigger)activeTrigger.setAttribute('aria-expanded','false');delete menu.dataset.open;menu.replaceChildren();active=null;activeTrigger=null;}
 document.addEventListener('click',e=>{if(active&&!menu.contains(e.target)&&!activeTrigger?.contains(e.target))close()});
 document.addEventListener('keydown',e=>{if(!active)return;if(e.key==='Escape'){e.preventDefault();const t=activeTrigger;close();t?.focus();return}const opts=[...menu.querySelectorAll('.ff-select-option:not(:disabled)')];let i=opts.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();i=(i+(e.key==='ArrowDown'?1:-1)+opts.length)%opts.length;opts[i]?.focus()}else if(e.key==='Enter'&&menu.contains(document.activeElement)){e.preventDefault();document.activeElement.click()} });
 window.addEventListener('resize',()=>{if(active&&activeTrigger)place(activeTrigger)});window.addEventListener('scroll',()=>{if(active&&activeTrigger)place(activeTrigger)},true);
 const init=root=>{(root||document).querySelectorAll('select:not([multiple]):not([size])').forEach(refresh)};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init());else init();
 const observer=new MutationObserver(records=>{for(const r of records){if(r.type==='childList'){r.addedNodes.forEach(n=>{if(n.nodeType===1){if(n.matches?.('select'))refresh(n);init(n)}})}else if(r.type==='attributes'&&r.target.matches?.('select'))refresh(r.target)}});
 observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['disabled','selected','aria-label']});
 document.addEventListener('change',e=>{if(e.target.matches?.('select'))refresh(e.target)});
 window.addEventListener('focusflow:localechange',()=>init());
})();

