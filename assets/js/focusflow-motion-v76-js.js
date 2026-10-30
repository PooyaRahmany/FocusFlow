/* FocusFlow motion polish v76 — reveal important content without changing app logic */
(function () {
  'use strict';
  function addRevealMotion() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var candidates = document.querySelectorAll('.card, .stats-top, .goal-card, .focus-chart, .activity-card, .category-card, [data-widget-card], .ff-widget-card, .widget-card');
    if (!candidates.length) return;
    if (!('IntersectionObserver' in window)) {
      candidates.forEach(function (el) { el.classList.add('ff-motion-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ff-motion-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -18px 0px' });
    candidates.forEach(function (el) {
      if (el.closest('[hidden]')) return;
      el.classList.add('ff-motion-item');
      observer.observe(el);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addRevealMotion, { once: true });
  else addRevealMotion();
  /* Newly opened dynamic cards also receive a gentle reveal; no handlers are intercepted. */
  if ('MutationObserver' in window && document.body) {
    var pending = false;
    var mo = new MutationObserver(function () {
      if (pending) return; pending = true;
      requestAnimationFrame(function () {
        pending = false;
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        document.querySelectorAll('.card:not(.ff-motion-item), [data-widget-card]:not(.ff-motion-item), .ff-widget-card:not(.ff-motion-item), .widget-card:not(.ff-motion-item)').forEach(function (el) {
          el.classList.add('ff-motion-item');
          requestAnimationFrame(function () { el.classList.add('ff-motion-visible'); });
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
})();
