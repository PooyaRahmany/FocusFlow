

(() => {
  const openMusicPage = (event) => {
    const trigger = event.target && event.target.closest('#musicOpenMenu, #musicOpen, .menu-item[data-page="music"]');
    if (!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    if (typeof window.showPage === 'function') window.showPage('music');
    else {
      document.querySelectorAll('.page').forEach(page => page.classList.toggle('active', page.id === 'musicPage'));
      document.getElementById('musicPage')?.scrollIntoView({behavior:'auto', block:'start'});
    }
    const overlay = document.getElementById('menuOverlay');
    if (overlay?.classList.contains('show') && typeof window.closeOverlay === 'function') window.closeOverlay(overlay);
    else if (overlay) { overlay.classList.remove('show'); overlay.setAttribute('aria-hidden', 'true'); }
    const page = document.getElementById('musicPage');
    if (page) {
      page.setAttribute('aria-label', (document.documentElement.lang || '').toLowerCase().startsWith('fa') || document.documentElement.dir === 'rtl' ? 'موسیقی' : 'Music');
      page.classList.add('active');
    }
    if (typeof renderMusic === 'function') renderMusic();
  };
  document.addEventListener('click', openMusicPage, true);
  // Keep the page reachable even if a later navigation-layout patch relocates its menu item.
  window.addEventListener('focusflow:open-music', () => {
    if (typeof window.showPage === 'function') window.showPage('music');
  });
})();

