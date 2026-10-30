

(()=>{
 const root=document.getElementById('bonfire-native-root');
 if(!root)return;
 const artFor=(text)=>{
   const t=(text||'').toLowerCase();
   let emoji='✦',c1='#a9d9f7',c2='#b9a7f5',label='IDEAS';
   const groups=[
    {keys:['program','code','javascript','python','react','html','css','برنامه','کد','جاوا','پایتون','توسعه'],emoji:'⌘',c1:'#9ed8ff',c2:'#8c9eff',label:'CODE'},
    {keys:['design','ui','ux','figma','طراحی','رابط','گرافیک'],emoji:'✳',c1:'#ffc5dc',c2:'#b9a7f5',label:'DESIGN'},
    {keys:['learn','study','education','درس','آموزش','یادگیری','تحقیق'],emoji:'✎',c1:'#ffe49b',c2:'#9ed8ff',label:'LEARN'},
    {keys:['image','photo','video','تصویر','عکس','ویدیو','فیلم'],emoji:'▧',c1:'#b8ead5',c2:'#9ed8ff',label:'MEDIA'},
    {keys:['sound','music','audio','صوت','موسیقی','آهنگ','صدا'],emoji:'♫',c1:'#f6c6d9',c2:'#ffe49b',label:'AUDIO'},
    {keys:['ai','prompt','هوش','پرامپت','چت'],emoji:'✧',c1:'#c5b8ff',c2:'#9ce4e0',label:'AI'},
    {keys:['3d','blender','model','سه بعدی','مدل'],emoji:'⬡',c1:'#9fd9ff',c2:'#d3b8ff',label:'3D'},
    {keys:['business','work','کار','کسب','مالی'],emoji:'◈',c1:'#b8ead5',c2:'#ffe49b',label:'WORK'}
   ];
   for(const g of groups){if(g.keys.some(k=>t.includes(k))){emoji=g.emoji;c1=g.c1;c2=g.c2;label=g.label;break}}
   const safe=label.replace(/[^A-Z0-9 ]/g,'');
   const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient><radialGradient id="gl"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="640" height="360" rx="32" fill="url(#g)"/><circle cx="520" cy="70" r="150" fill="url(#gl)"/><circle cx="100" cy="330" r="170" fill="#fff" opacity=".12"/><path d="M0 270 Q150 190 270 280 T640 230 V360 H0Z" fill="#fff" opacity=".15"/><g fill="#fff" opacity=".28"><circle cx="105" cy="70" r="5"/><circle cx="550" cy="250" r="8"/><circle cx="450" cy="120" r="4"/><circle cx="210" cy="280" r="6"/></g><text x="320" y="205" text-anchor="middle" font-size="118" font-family="Arial,sans-serif" fill="#fff" stroke="#fff" stroke-opacity=".16" stroke-width="2">${emoji}</text><text x="320" y="305" text-anchor="middle" font-size="24" font-weight="700" letter-spacing="7" font-family="Arial,sans-serif" fill="#29334b" opacity=".78">${safe}</text></svg>`;
   return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
 };
 const decorate=()=>{
  const cards=root.querySelectorAll('#cards .promptcard');
  cards.forEach(card=>{
   const cover=card.querySelector('.cover');if(!cover)return;
   const real=cover.querySelector('img:not(.tag-fallback-art)');
   if(real){cover.querySelector('.tag-fallback-art')?.remove();return;}
   if(cover.querySelector('.tag-fallback-art'))return;
   const tags=[...card.querySelectorAll('.minitag,.tag,.cardtitle')].map(x=>x.textContent||'').join(' ');
   const title=card.querySelector('.cardtitle')?.textContent||'';
   const img=document.createElement('img');img.className='tag-fallback-art';img.alt=(title.trim()||'Prompt')+' illustration';img.loading='lazy';img.src=artFor(tags+' '+title);
   cover.prepend(img);
  });
 };
 const cards=root.querySelector('#cards');
 if(cards){new MutationObserver(()=>requestAnimationFrame(decorate)).observe(cards,{childList:true,subtree:true});}
 decorate();
 document.addEventListener('click',e=>{if(e.target.closest('#gridBtn,#listBtn,[data-sort-value],#sortToggle'))setTimeout(decorate,40)});
 window.addEventListener('resize',()=>requestAnimationFrame(decorate),{passive:true});
})();

