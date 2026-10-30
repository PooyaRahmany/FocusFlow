

(()=>{
  'use strict';
  const popup=document.getElementById('miniPlayer');
  if(popup){
    /* Avoid the old centering transform and CSS transition fighting saved/manual coordinates. */
    const originalUpdate=window.updateMusicUI;
    const settlePopup=()=>{
      if(popup.hidden||popup.dataset.userPosition!=='true')return;
      popup.style.transform='none';
      popup.style.transition=popup.classList.contains('is-dragging')?'none':'';
    };
    new MutationObserver(()=>requestAnimationFrame(settlePopup)).observe(popup,{attributes:true,attributeFilter:['hidden','class']});
    window.addEventListener('resize',()=>requestAnimationFrame(settlePopup),{passive:true});

  }
  /* Animate Bonfire content with the GSAP already bundled by FocusFlow; respect reduced-motion/perf mode. */
  const root=document.getElementById('bonfire-native-root');
  if(!root)return;
  const animate=()=>{
    if(!window.gsap||window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('perf-lite')||localStorage.getItem('focusflow-perf')==='lite')return;
    const page=document.getElementById('bonfirePage');if(!page||!page.classList.contains('active'))return;
    const targets=root.querySelectorAll('.top,.hero,.stats,.tagrow-wrap,.sectionhead,#cards>.promptcard,#cards>.empty');
    try{
      window.gsap.killTweensOf(targets);
      window.gsap.fromTo(targets,{opacity:0,y:8},{opacity:1,y:0,duration:.3,stagger:.025,ease:'power2.out',clearProps:'transform,opacity'});
    }catch(_){targets.forEach(el=>{el.style.removeProperty('opacity');el.style.removeProperty('transform')})}
  };
  document.addEventListener('click',e=>{if(e.target.closest('[data-page="bonfire"],#bonfireOpen'))requestAnimationFrame(animate)},true);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)requestAnimationFrame(animate)});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>requestAnimationFrame(animate),{once:true});
})();

