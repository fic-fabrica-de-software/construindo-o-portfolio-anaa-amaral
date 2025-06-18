setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("data").innerHTML = d.toLocaleTimeString();
}

const exampleEl = document.getElementById('example')
const popover = new bootstrap.Popover(exampleEl, options)

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * window.innerWidth + '3px';

  const size = Math.random() * 20 + 10; 
  heart.style.width = size + '3px';
  heart.style.height = size + '3px';

  heart.style.animationDuration = (Math.random() * 2 + 3) + '2s';

  document.querySelector('.container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 200);