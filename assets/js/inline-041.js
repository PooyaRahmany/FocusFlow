

(()=>{
  'use strict';
  const root=document.getElementById('bonfire-native-root');
  const fa=()=>root?.lang==='fa'||root?.dir==='rtl';
  function alignBonfire(){
    if(!root)return;
    const persian=fa();const targetDir=persian?'rtl':'ltr';if(root.dir!==targetDir)root.dir=targetDir;
    root.querySelectorAll('.sectionhead').forEach(el=>{el.style.setProperty('direction',persian?'rtl':'ltr','important');el.style.setProperty('justify-content','flex-start','important');});
    root.querySelectorAll('.toolbar').forEach(el=>{el.style.setProperty('direction',persian?'rtl':'ltr','important');el.style.setProperty('justify-content','flex-start','important');el.style.setProperty('width','auto','important');el.style.setProperty('margin-inline','0','important');});
    const select=root.querySelector('.toolbar .ff-select-shell');
    if(select&&persian){select.style.setProperty('min-width',window.innerWidth<=520?'0':'210px','important');select.style.setProperty('max-width',window.innerWidth<=520?'100%':'280px','important');}
  }
  // When a new tag is created from Add Prompt, refresh its tag picker and select it. The existing
  // Bonfire save handler handles storage; this listener only repairs UI state after it completes.
  document.addEventListener('click',e=>{
    const add=e.target.closest('#__removedInlineAddTag');
    if(add){add.setAttribute('aria-label',fa()?'افزودن برچسب جدید':'Add a new tag');add.setAttribute('title',fa()?'افزودن برچسب جدید':'Add a new tag');}
  },true);
  alignBonfire();
  const observer=new MutationObserver(()=>alignBonfire());
  if(root)observer.observe(root,{attributes:true,attributeFilter:['lang','dir']});
  window.addEventListener('resize',alignBonfire,{passive:true});
})();

