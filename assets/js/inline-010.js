

/* Draggable floating music popup; keep its position between app sessions when possible. */
(() => {
  const popup = document.getElementById('miniPlayer');
  const handleEls = [document.getElementById('miniCover'), document.getElementById('miniOpen'), document.getElementById('miniBar')];
  if (!popup || handleEls.some(el => !el)) return;
  popup.dataset.draggable = 'true';
  const positionKey = 'focusflow-mini-player-position-v1';
  let start = null, moved = false, suppressOpenUntil = 0;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), Math.max(min, max));
  function applyPosition(left, top, save = false) {
    const maxLeft = Math.max(8, window.innerWidth - popup.offsetWidth - 8);
    const maxTop = Math.max(8, window.innerHeight - popup.offsetHeight - 8);
    left = clamp(left, 8, maxLeft); top = clamp(top, 8, maxTop);
    popup.style.left = `${left}px`; popup.style.top = `${top}px`;
    popup.style.right = 'auto'; popup.style.bottom = 'auto'; popup.style.transform = 'none';
    popup.dataset.userPosition = 'true';
    if (save) { try { localStorage.setItem(positionKey, JSON.stringify({left, top})); } catch (_) {} }
  }
  let savedPosition = null;
  try {
    const saved = JSON.parse(localStorage.getItem(positionKey) || 'null');
    if (saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)) savedPosition = saved;
  } catch (_) {}
  const restoreSavedPosition = () => {
    if (savedPosition && !popup.hidden) requestAnimationFrame(() => applyPosition(savedPosition.left, savedPosition.top));
  };
  new MutationObserver(restoreSavedPosition).observe(popup, {attributes:true, attributeFilter:['hidden']});
  restoreSavedPosition();
  handleEls.forEach(handle => handle.addEventListener('pointerdown', e => {
    if (e.button !== undefined && e.button !== 0) return;
    if (popup.hidden) return;
    const rect = popup.getBoundingClientRect();
    start = {pointerId:e.pointerId, x:e.clientX, y:e.clientY, left:rect.left, top:rect.top};
    moved = false;
    try { handle.setPointerCapture(e.pointerId); } catch (_) {}
  }));
  document.addEventListener('pointermove', e => {
    if (!start || e.pointerId !== start.pointerId) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    if (!moved && Math.hypot(dx,dy) < 5) return;
    moved = true; popup.classList.add('is-dragging');
    applyPosition(start.left + dx, start.top + dy);
  }, {passive:false});
  document.addEventListener('pointerup', e => {
    if (!start || e.pointerId !== start.pointerId) return;
    if (moved) { suppressOpenUntil = Date.now() + 350; applyPosition(popup.getBoundingClientRect().left, popup.getBoundingClientRect().top, true); }
    start = null; popup.classList.remove('is-dragging');
  });
  document.addEventListener('pointercancel', () => { start = null; popup.classList.remove('is-dragging'); });
  const openPlayer = document.getElementById('miniOpen');
  if (openPlayer) openPlayer.addEventListener('click', e => { if (Date.now() < suppressOpenUntil) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  const cover = document.getElementById('miniCover');
  if (cover) cover.addEventListener('click', e => { if (Date.now() < suppressOpenUntil) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  window.addEventListener('resize', () => {
    if (popup.dataset.userPosition === 'true' && !popup.hidden) {
      const rect = popup.getBoundingClientRect(); applyPosition(rect.left, rect.top, true);
    }
  });
})();

