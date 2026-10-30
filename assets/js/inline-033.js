

(()=>{
 const update=()=>{
  const fa=(document.documentElement.lang||'').toLowerCase().startsWith('fa')||document.documentElement.dir==='rtl';
  const nav=document.querySelector('nav.bottomnav[aria-label="Main navigation"] .bonfire-top-link');
  if(nav){const span=nav.querySelector('span');if(span)span.textContent=fa?'آتیشگاه':'Bonfire';nav.setAttribute('aria-label',fa?'آتیشگاه':'Bonfire');nav.setAttribute('title',fa?'آتیشگاه':'Bonfire');}
  const root=document.getElementById('bonfire-native-root');if(root){root.classList.toggle('is-persian',fa);root.lang=fa?'fa':'en';root.dir=fa?'rtl':'ltr';}
 };
 update();document.addEventListener('click',e=>{if(e.target.closest('#languageSelect,#languageToggle,[data-language]'))setTimeout(update,80)});
 document.addEventListener('change',e=>{if(e.target.matches('#languageSelect,#language,[name="language"]'))setTimeout(update,80)});
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 window.addEventListener('languagechange',update);window.addEventListener('bonfire-language-change',update);
})();

