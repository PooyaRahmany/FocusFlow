

/* FocusFlow: enforce sensible client-input length limits, including dynamically created fields. */
(() => {
  'use strict';
  const limits = { text: 160, search: 100, url: 2048, email: 254, password: 128, tel: 32, textarea: 1000, number: 18 };
  const cap = (el) => {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;
    const type = el instanceof HTMLTextAreaElement ? 'textarea' : (el.type || 'text').toLowerCase();
    if (!(type in limits)) return;
    const limit = type === 'textarea'
      ? (el.maxLength > 0 ? Math.min(el.maxLength, limits.textarea) : limits.textarea)
      : (el.maxLength > 0 ? Math.min(el.maxLength, limits[type]) : limits[type]);
    if (type !== 'number' && el.maxLength !== limit) el.maxLength = limit;
    if (typeof el.value === 'string' && el.value.length > limit) el.value = el.value.slice(0, limit);
    el.dataset.ffMaxLength = String(limit);
  };
  const scan = (root) => {
    if (root.matches?.('input,textarea')) cap(root);
    root.querySelectorAll?.('input,textarea').forEach(cap);
  };
  scan(document);
  document.addEventListener('input', (event) => {
    const el = event.target;
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;
    cap(el);
    const limit = Number(el.dataset.ffMaxLength);
    if (limit > 0 && el.value.length > limit) {
      const start = el.selectionStart;
      el.value = el.value.slice(0, limit);
      try { el.setSelectionRange(Math.min(start ?? limit, limit), Math.min(start ?? limit, limit)); } catch (_) {}
    }
  }, true);
  new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
    if (node.nodeType === 1) scan(node);
  }))).observe(document.documentElement, { childList: true, subtree: true });
})();

