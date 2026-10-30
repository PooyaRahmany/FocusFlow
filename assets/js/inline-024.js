

(() => {
  const syncMiniPlayerVisibility = () => {
    const page = document.getElementById('musicPage');
    const mini = document.getElementById('miniPlayer');
    if (page?.classList.contains('active') && mini) mini.hidden = true;
  };
  document.addEventListener('DOMContentLoaded', syncMiniPlayerVisibility, { once: true });
  document.addEventListener('click', event => {
    if (event.target.closest('[data-page="music"], #musicOpenMenu, #musicOpen')) setTimeout(syncMiniPlayerVisibility, 0);
  }, true);
})();

