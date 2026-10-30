

(()=>{
 const clean=()=>{
  const root=document.getElementById('bonfire-native-root');if(!root)return;
  /* Remove the duplicate visible sorting/filter controls from the DOM on desktop and mobile. */
  root.querySelectorAll('.toolbar .sort-wrap, .toolbar #sortToggle, .toolbar #sortMenu').forEach(el=>el.remove());
  const toolbar=root.querySelector('.toolbar');if(toolbar){toolbar.querySelectorAll(':scope > button').forEach(btn=>{if(!['gridBtn','listBtn'].includes(btn.id))btn.remove()});}
  /* Keep select#sort active for custom select shell */
  const sync=()=>{root.dir=(document.documentElement.dir==='rtl'||(document.documentElement.lang||'').toLowerCase().startsWith('fa'))?'rtl':'ltr';};
  sync();new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['dir','lang']});
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',clean,{once:true});else clean();
})();

