

/* asd-ste102: make the planner header reflect the active Finance view. */
(function(){
 const title=document.getElementById('plannerProjectTitle');
 const desc=document.getElementById('plannerProjectDescription');
 const financeTab=document.getElementById('plannerFinanceTab');
 if(!title||!financeTab)return;
 const originalTitle=title.textContent,originalDesc=desc?desc.textContent:'';
 const sync=()=>{
   const active=financeTab.getAttribute('aria-selected')==='true'||!document.getElementById('plannerFinanceView')?.hidden;
   if(active){const isFa=document.documentElement.lang==='fa';title.textContent=isFa?'امور مالی':'Finance';if(desc)desc.textContent=isFa?'درآمد، هزینه‌ها و ماندهٔ مالی':'Income, expenses, and balances';}
   else {title.textContent=originalTitle;if(desc)desc.textContent=originalDesc;}
 };
 document.addEventListener('click',e=>{if(e.target.closest('[data-planner-view]'))setTimeout(sync,0);});
 const view=document.getElementById('plannerFinanceView');
 if(view&&window.MutationObserver)new MutationObserver(sync).observe(view,{attributes:true,attributeFilter:['hidden']});
 document.addEventListener('focusin',sync);
 window.addEventListener('storage',sync);
 sync();
})();

