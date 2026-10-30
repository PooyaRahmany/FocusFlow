

(()=>{
 const syncBonfireName=()=>{
  const fa=(document.documentElement.lang||'').toLowerCase().startsWith('fa') || document.documentElement.dir==='rtl' || localStorage.getItem('focusflow-language')==='fa';
  const root=document.getElementById('bonfire-native-root');
  const brand=root?.querySelector('.brand h1');
  if(brand) brand.textContent=fa?'آتیشگاه':'Bonfire';
  const page=document.getElementById('bonfirePage');
  if(page) page.setAttribute('aria-label',fa?'آتیشگاه':'Bonfire prompt library');
 };
 syncBonfireName();
 new MutationObserver(syncBonfireName).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 window.addEventListener('storage',e=>{if(e.key==='focusflow-language')syncBonfireName()});
})();

