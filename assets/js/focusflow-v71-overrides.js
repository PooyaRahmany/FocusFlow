
/* FocusFlow v71 — prevent old inline dimension values from keeping the floating player oversized. */
(() => {
  'use strict';
  const player = document.getElementById('miniPlayer');
  if (!player) return;

  // Clear only dimensions previously injected by the v70 size-lock patch.
  // The stylesheet now sets a compact width; height is content-driven and cannot be manually resized.
  ['width','min-width','max-width','height','min-height','max-height','resize'].forEach(prop => {
    player.style.removeProperty(prop);
  });
  player.style.setProperty('box-sizing', 'border-box');

})();

