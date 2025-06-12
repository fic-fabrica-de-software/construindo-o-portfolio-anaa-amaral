setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("data").innerHTML = d.toLocaleTimeString();
}

const exampleEl = document.getElementById('example')
const popover = new bootstrap.Popover(exampleEl, options)