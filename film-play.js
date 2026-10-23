/* Keep the original v5 playback logic; add a visible manual play affordance. */
(() => {
  'use strict';
  const video = document.getElementById('brand-video');
  const overlay = document.getElementById('film-play-overlay');
  if (!video || !overlay) return;
  const sync = () => { overlay.hidden = !video.paused && !video.ended; };
  const fail = () => {
    overlay.hidden = false;
    overlay.disabled = true;
    overlay.textContent = 'Video unavailable';
    overlay.setAttribute('aria-label', 'Brand video unavailable');
  };
  overlay.addEventListener('click', async () => {
    overlay.disabled = true;
    try {
      video.load();
      await video.play();
      sync();
    } catch (_) {
      overlay.hidden = false;
      overlay.textContent = 'Tap to retry video';
      overlay.setAttribute('aria-label', 'Retry playing brand video');
    } finally {
      overlay.disabled = false;
    }
  });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  video.addEventListener('ended', sync);
  video.addEventListener('error', fail);
  video.querySelector('source')?.addEventListener('error', fail);
  sync();
})();
