function showSpeedPopup(speed) {
  let existingPopup = document.getElementById('video-speed-popup');
  if (!existingPopup) {
    const popup = document.createElement('div');
    popup.id = 'video-speed-popup';
    popup.style.position = 'fixed';
    popup.style.pointerEvents = 'none';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.zIndex = 999999; 
    popup.style.padding = '15px 25px';
    popup.style.background = 'rgba(0, 0, 0, 0.6)';
    popup.style.backdropFilter = 'blur(4px)';
    popup.style.textShadow = '0px 0px 4px black';
    popup.style.color = '#fff';
    popup.style.fontSize = '24px';
    popup.style.borderRadius = '10px';
    popup.style.fontWeight = 'bold';
    popup.style.opacity = '1';
    popup.style.transition = 'opacity 0.5s ease-out';
    document.body.appendChild(popup);
    existingPopup = popup;
  }

  existingPopup.textContent = `Speed: ${speed.toFixed(2)}x`;
  existingPopup.style.opacity = '1';

  // Clear previous timer if any
  if (window.popupTimer) clearTimeout(window.popupTimer);

  // Fade out after 1 second
  window.popupTimer = setTimeout(() => {
    existingPopup.style.opacity = '0';
  }, 1000);
}

// Key detection
document.addEventListener('keydown', function (e) {
  if (!e.shiftKey) return;

  const videos = document.querySelectorAll('video');
  if (videos.length === 0) return;

  videos.forEach(video => {
    if (e.key === '<') {
      video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
      showSpeedPopup(video.playbackRate);
    } else if (e.key === '>') {
      video.playbackRate = Math.min(16, video.playbackRate + 0.25);
      showSpeedPopup(video.playbackRate);
    }
  });
});
 

