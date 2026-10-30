

(() => {
  const refreshMusicList = () => {
    const page = document.getElementById('musicPage');
    const list = document.getElementById('musicList');
    if (page?.classList.contains('active') && list && (!list.children.length || list.children.length !== (window.TRACKS?.length || list.children.length))) {
      if (typeof renderMusic === 'function') renderMusic();
    }
  };
  document.addEventListener('DOMContentLoaded', refreshMusicList, { once: true });
  document.addEventListener('click', event => {
    if (event.target.closest('#musicOpenMenu, #musicOpen, .menu-item[data-page="music"], [data-page="music"]')) {
      setTimeout(refreshMusicList, 0);
    }
  }, true);
})();

