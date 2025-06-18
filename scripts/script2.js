 function createEmojiHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = "♥️";

      const size = Math.random() * 20 + 20; 
      heart.style.fontSize = size + 'px';

      heart.style.left = Math.random() * window.innerWidth + 'px';

      const duration = Math.random() * 2 + 3; 
      heart.style.animationDuration = duration + 's';

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }

    setInterval(createEmojiHeart, 150);