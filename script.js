const squares = document.querySelectorAll('.square');
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#time-left');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  // Remove the mole class from all squares
  squares.forEach((square) => {
    square.classList.remove('mole');
  });

  // Add mole class to a random square
  const randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add('mole');
  hitPosition = randomSquare.id;
}

// Add event listeners to squares to detect clicks
squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      scoreDisplay.textContent = result;
      hitPosition = null;
    }
  });
});

// Function to move the mole at regular intervals
function moveMole() {
  timerId = setInterval(randomSquare, 700);
}

// Countdown timer
function countDown() {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(countdownTimerId);
    alert(`Game Over! Your final score is ${result}`);
  }
}

moveMole();
const countdownTimerId = setInterval(countDown, 1000);
