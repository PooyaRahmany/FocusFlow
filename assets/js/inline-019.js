


(()=>{
 const root=document.getElementById('bonfire-native-root');const row=root.querySelector('#tagRow');
 if(row){let down=false,startX=0,startScroll=0,moved=false,suppress=false;
  row.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;down=true;moved=false;startX=e.clientX;startScroll=row.scrollLeft;row.classList.add('is-dragging')});
  window.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-startX;if(Math.abs(dx)>4)moved=true;if(moved){row.scrollLeft=startScroll-dx;e.preventDefault()}},{passive:false});
  window.addEventListener('pointerup',()=>{if(!down)return;down=false;row.classList.remove('is-dragging');if(moved){suppress=true;setTimeout(()=>suppress=false,0)}});
  row.addEventListener('click',e=>{if(suppress){e.preventDefault();e.stopImmediatePropagation();suppress=false}},true);
 }
 const select=root.querySelector('#sort'),label=root.querySelector('#sortLabel'),menu=root.querySelector('#sortMenu');
 if(select&&label&&menu){const sync=()=>{const opt=select.options[select.selectedIndex];if(opt)label.textContent=opt.textContent;menu.querySelectorAll('[data-sort-value]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.sortValue===select.value)))};sync();select.addEventListener('change',sync)}
 // Explicit delegation survives tag-row re-rendering and keeps the selected filter in sync.
 if(row){row.addEventListener('click',e=>{const b=e.target.closest('button[data-tag]');if(!b)return;row.querySelectorAll('button[data-tag]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))},true)}
})();


