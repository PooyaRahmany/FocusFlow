

(()=>{
 const root=document.getElementById('bonfire-native-root');if(!root)return;
 const fa=()=>((document.documentElement.lang||root.lang||'en').toLowerCase().startsWith('fa')||document.documentElement.dir==='rtl');
 const localizeCardDates=()=>{
  root.querySelectorAll('#cards .promptcard').forEach(card=>{
   const node=card.querySelector('.cardfoot .date');if(!node)return;
   const pText=node.textContent||'';
   const m=pText.match(/(?:Edited|ویرایش)\s+(.+?)\s*[·•]\s*(\d+)\s*(?:copies|کپی)/i);
   if(!m)return;
   const n=Number(m[2]);
   if(fa()){
    let date=m[1];
    try{const iso=(card.dataset.updatedAt||'');if(iso)date=new Intl.DateTimeFormat('fa-IR-u-ca-persian-nu-arabext',{month:'short',day:'numeric'}).format(new Date(iso));}catch{}
    node.textContent=`ویرایش ${date} · ${new Intl.NumberFormat('fa-IR-u-nu-arabext').format(n)} کپی`;
   }else node.textContent=`Edited ${m[1]} · ${n} copies`;
  });
 };
 const decorate=()=>{
  root.querySelectorAll('#cards .promptcard').forEach(card=>{
   const cover=card.querySelector('.cover');if(!cover)return;
   let img=cover.querySelector('img');
   if(!img){img=document.createElement('img');img.className='tag-fallback-art';img.alt='';img.loading='eager';img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g"><stop stop-color="#9ed8ff"/><stop offset="1" stop-color="#b9a7f5"/></linearGradient></defs><rect width="640" height="360" rx="28" fill="url(#g)"/><circle cx="320" cy="155" r="72" fill="#fff" fill-opacity=".35"/><text x="320" y="185" font-size="92" text-anchor="middle" fill="#34466a">✦</text><text x="320" y="290" font-size="22" text-anchor="middle" letter-spacing="5" fill="#34466a">IDEAS</text></svg>');cover.prepend(img);}
   img.style.display='block';img.style.visibility='visible';img.style.opacity='1';
  });
 };
 const cards=root.querySelector('#cards');if(cards)new MutationObserver(()=>requestAnimationFrame(()=>{decorate();localizeCardDates()})).observe(cards,{childList:true,subtree:true});
 const langObserver=new MutationObserver(()=>localizeCardDates());langObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 document.addEventListener('click',e=>{if(e.target.closest('#gridBtn,#listBtn,[data-copy],#detailCopy'))setTimeout(()=>{decorate();localizeCardDates()},50)});
 decorate();localizeCardDates();
})();

