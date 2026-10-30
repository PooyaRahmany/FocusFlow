

(() => {
  const desktop = window.matchMedia('(min-width: 1024px)');
  const repair = () => {
    if (!desktop.matches) return;
    // Never select Bonfire's private nav. Its own Add Prompt button remains inside its app.
    const nav = document.querySelector('nav.bottomnav[aria-label="Main navigation"]');
    const add = document.getElementById('addBtn');
    if (nav && add && !nav.contains(add)) nav.appendChild(add);
    const summary = document.getElementById('desktopHomeSummary');
    const progress = document.getElementById('progressPage');
    if (summary && progress) {
      for (const cls of ['goal-card', 'today-card']) {
        if (!summary.querySelector(':scope > .' + cls)) {
          const card = progress.querySelector(':scope > .' + cls);
          if (card) summary.appendChild(card);
        }
      }
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', repair, { once: true });
  else repair();
  window.addEventListener('resize', repair, { passive: true });
  window.addEventListener('orientationchange', repair, { passive: true });
})();

