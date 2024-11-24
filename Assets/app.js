var fan = document.getElementById("fan");

function toggleFan(checkbox) {
  if (checkbox.checked) {
    startFan();
  } else {
    stopFan();
  }
}

function startFan() {
  fan.style.animation = "rotate 0.7s linear infinite"; 
}

function stopFan() {
  fan.style.animation = "none";  
}
