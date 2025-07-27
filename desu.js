function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }

  // Store the timer element reference in a variable
const timerElement = document.getElementById('timer');

// Initialize the timer
let seconds = 0;

// Function to update the timer every second
function updateTimer() {
  seconds++;
  timerElement.textContent = `You have been here for: ${seconds} second${seconds !== 1 ? 's' : ''}`;
}

// Start the timer when the page loads
const intervalID = setInterval(updateTimer, 1000);