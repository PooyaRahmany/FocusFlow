

(() => {
  const host = document.getElementById('bonfire-native-root');
  const add = document.getElementById('addBtn');
  const labelBonfire = () => {
    const fa = document.documentElement.lang === 'fa' || document.documentElement.dir === 'rtl';
    const brand = host?.querySelector('.brand h1');
    if (brand) brand.textContent = fa ? 'آتیشگاه' : 'Bonfire';
    if (add) {
      const label = fa ? 'افزودن پرامپت' : 'Add prompt';
      const text = add.querySelector('.desktop-nav-label');
      if (text) text.textContent = label;
      add.setAttribute('aria-label', label); add.title = label;
    }
  };
  // Bind at the end of the document so the shared task handler cannot overwrite this behavior.
  if (add) {
    // Document capture runs before older target-level handlers, avoiding their stale page-context checks.
    document.addEventListener('click', event => {
      if (event.target.closest('#addBtn') && document.getElementById('bonfirePage')?.classList.contains('active')) {
        event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
        const nativeAdd = host?.querySelector('#topAdd');
        if (nativeAdd) nativeAdd.click();
        else if (typeof window.bonfireAddPrompt === 'function') window.bonfireAddPrompt();
      }
    }, true);
  }
  document.querySelectorAll('#plannerOpenMenu').forEach(el => el.remove());
  document.addEventListener('click', event => {
    if (event.target.closest('[data-page="bonfire"]') || event.target.closest('#bonfirePage')) labelBonfire();
  }, true);
  const observer = new MutationObserver(() => {
    if (document.getElementById('bonfirePage')?.classList.contains('active')) labelBonfire();
  });
  const page = document.getElementById('bonfirePage');
  if (page) observer.observe(page, {attributes:true, attributeFilter:['class']});
  window.addEventListener('bonfire-language-change', labelBonfire);
  labelBonfire();
})();

