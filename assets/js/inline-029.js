

(function(){
 document.addEventListener('click',function(e){
   var close=e.target&&e.target.closest&&e.target.closest('#tagEditModal [data-close="tagEditModal"]');
   if(close){
     e.preventDefault();
     var dlg=document.getElementById('tagEditModal');
     if(dlg){dlg.classList.remove('open');dlg.style.removeProperty('display');dlg.style.removeProperty('visibility');dlg.style.removeProperty('opacity');}
   }
 },true);
})();

