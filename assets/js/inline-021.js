

(() => {
  const addButton = document.getElementById('addBtn');
  if (!addButton || typeof updateAddButtonContext !== 'function') return;
  const originalUpdateAddButtonContext = updateAddButtonContext;
  updateAddButtonContext = function() {
    if (typeof state !== 'undefined' && state.page === 'bonfire') {
      originalUpdateAddButtonContext();
      return;
    }
    originalUpdateAddButtonContext();
  };
  addButton.addEventListener('click', event => {
    if (typeof state === 'undefined' || state.page !== 'bonfire') return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    if (typeof window.bonfireAddPrompt === 'function') window.bonfireAddPrompt();
  }, true);
  updateAddButtonContext();
})();

