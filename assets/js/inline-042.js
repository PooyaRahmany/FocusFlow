

(function(){
  function install(){
    var dlg=document.getElementById('tagEditModal');
    if(!dlg||dlg.__ffV60Installed)return;
    dlg.__ffV60Installed=true;
    dlg.classList.add('ff-tag-dialog-top');
    /* Moving the sibling dialog to body escapes transformed/overflow-hidden app wrappers. */
    if(dlg.parentElement!==document.body)document.body.appendChild(dlg);
    function closeDialog(e){
      var close=e.target&&e.target.closest&&e.target.closest('#tagEditModal [data-close="tagEditModal"]');
      if(close){e.preventDefault();e.stopImmediatePropagation();dlg.classList.remove('open');return;}
      if(e.target===dlg){dlg.classList.remove('open');}
    }
    dlg.addEventListener('click',closeDialog,true);
    document.addEventListener('click',function(e){
      var trigger=e.target&&e.target.closest&&e.target.closest('#newTagBtn');
      if(!trigger)return;
      var root=document.getElementById('bonfire-native-root');
      if(root&&!root.contains(trigger))return;
      e.preventDefault();e.stopImmediatePropagation();
      /* Use the app's real initializer so translations and the Lucide icon picker are populated. */
      if(typeof window.openTagEditor==='function'){
        window.openTagEditor();
        requestAnimationFrame(function(){
          if(dlg.parentElement!==document.body)document.body.appendChild(dlg);
          dlg.classList.add('ff-tag-dialog-top','open');
          dlg.style.setProperty('display','flex','important');
          dlg.style.setProperty('z-index','2147483647','important');
          var picker=dlg.querySelector('#tagIconPicker');
          if(picker&&picker.children.length===0&&typeof window.renderTagIconPicker==='function')window.renderTagIconPicker(dlg.querySelector('#tagIcon')?.value||'tag');
        });
      }
    },true);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();

