  function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
  }

  function playSound(e) {
      var code = e.keyCode && e.keyCode || e;
      const audio = document.querySelector(`audio[data-key="${code}"]`);
      const key = document.querySelector(`div[data-key="${code}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
  }
  var x = document.getElementsByClassName("key");
  x.onclick = playSound;
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition);
      key.onclick = playSound.bind(null, key.getAttribute("data-key"));
  });
  window.addEventListener('keydown', playSound);
