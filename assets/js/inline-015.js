

(() => {
  const root = document.getElementById('bonfire-native-root');
  const openButton = document.getElementById('bonfireOpen');
  const plannerButton = document.getElementById('plannerOpenMenu');
  if (!root) return;

  const syncLanguage = () => {
    const language = (document.documentElement.lang || 'en').toLowerCase().startsWith('fa') ? 'fa' : 'en';
    root.lang = language;
    root.dir = language === 'fa' ? 'rtl' : 'ltr';
    root.classList.toggle('is-persian', language === 'fa');
    window.dispatchEvent(new CustomEvent('bonfire-language-change', { detail: { language } }));
  };
  const syncTheme = () => {
    const theme = document.documentElement.dataset.theme;
    if (theme) root.classList.toggle('dark', theme === 'dark');
  };
  const closeMenu = () => {
    const overlay = document.getElementById('menuOverlay');
    if (overlay && overlay.classList.contains('show') && typeof closeOverlay === 'function') closeOverlay(overlay);
    else if (overlay) { overlay.classList.remove('show'); overlay.setAttribute('aria-hidden', 'true'); }
  };
  const activatePage = (name) => {
    if (typeof showPage === 'function') showPage(name);
    // Keep the host page state and visible page in sync even if an optional page animation fails.
    if (typeof state === 'object' && state) state.page = name;
    document.querySelectorAll('.page').forEach(page => page.classList.toggle('active', page.id === name + 'Page'));
    document.querySelectorAll('.navbtn').forEach(button => {
      const active = button.dataset.page === (name === 'stats' ? 'progress' : name === 'player' ? 'music' : name);
      button.classList.toggle('active', active);
      button.setAttribute('aria-current', active ? 'page' : 'false');
    });
    closeMenu();
    window.scrollTo(0, 0);
  };
  syncLanguage();
  syncTheme();
  new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });
  new MutationObserver(syncTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (openButton) openButton.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); activatePage('bonfire'); }, true);
  if (plannerButton) plannerButton.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); activatePage('planner'); }, true);
})();

