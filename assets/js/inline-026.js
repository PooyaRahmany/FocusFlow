

(function(){
 const root=document.getElementById('bonfire-native-root');if(!root)return;
 // Keep notifications as a short floating toast near the top, never as ordinary page text.
 const toastEl=root.querySelector('#bonfireToast');if(toastEl){const obs=new MutationObserver(()=>{if(toastEl.textContent.trim()){toastEl.classList.add('show');clearTimeout(toastEl.__hideTimer);toastEl.__hideTimer=setTimeout(()=>toastEl.classList.remove('show'),2300)}});obs.observe(toastEl,{childList:true,characterData:true,subtree:true});}
 // Re-apply the correct direction and tag language after the host language changes.
 const refresh=()=>{const fa=(document.documentElement.lang||'').toLowerCase().startsWith('fa')||document.body.classList.contains('rtl')||root.classList.contains('is-persian');root.dir=fa?'rtl':'ltr';};refresh();new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir','class']});
})();

