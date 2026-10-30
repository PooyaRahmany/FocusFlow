

(() => {
  const desktop = window.matchMedia('(min-width: 1024px)');
  const repairDesktopSummary = () => {
    if (!desktop.matches) return;
    const home = document.getElementById('homePage');
    const progress = document.getElementById('progressPage');
    const summary = document.getElementById('desktopHomeSummary');
    if (!home || !progress || !summary) return;
    for (const cls of ['goal-card', 'today-card']) {
      const current = summary.querySelector(':scope > .' + cls);
      const original = progress.querySelector(':scope > .' + cls);
      if (!current && original) summary.appendChild(original);
    }
  };
  document.addEventListener('DOMContentLoaded', repairDesktopSummary, { once: true });
  window.addEventListener('resize', repairDesktopSummary, { passive: true });
  repairDesktopSummary();
})();

