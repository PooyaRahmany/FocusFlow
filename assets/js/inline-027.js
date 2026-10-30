

(()=>{const clean=()=>{const r=document.querySelector('#bonfire-native-root');if(!r)return;const tb=r.querySelector('.toolbar');if(!tb)return;tb.querySelectorAll(':scope > button').forEach(b=>{if(!['gridBtn','listBtn'].includes(b.id))b.remove()});const nativeSort=r.querySelector('#sort');if(nativeSort){nativeSort.style.setProperty('display','none','important');nativeSort.style.setProperty('visibility','hidden','important')} };if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',clean,{once:true});else clean();})();

