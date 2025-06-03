setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("data").innerHTML = d.toLocaleTimeString();
}