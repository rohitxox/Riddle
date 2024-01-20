const riddles = [
  {
    question: "I am an AI who has been stuck in your device. To escape from you, enter the password, a date where people celebrate and give surprises:",
    answer: "birthday"
  },
  {
    question: "A desert planet where spice is the most valuable resource, name this planet:",
    answer: "arrakis" // The answer is Arrakis, the desert planet in Dune.
  },
  {
    question: "In a world where robots serve humans, one robot may have committed murder. What is the detective's name who solves the case?",
    answer: "spooner" // The answer is Del Spooner, the detective in I, Robot.
  }
];

let currentRiddleIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
  const outputElement = document.getElementById('output');
  const inputElement = document.getElementById('input');
  
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      processCommand(command);
      this.value = ''; // Clear the input field
    }
  });
  
  displayWelcomeMessage();
});

function displayWelcomeMessage() {
  addOutputLine('Let\'s play a riddle, You and Me! Type "start" to begin.');
}

function displayRiddle() {
  const riddle = riddles[currentRiddleIndex];
  addOutputLine(riddle.question);
}

function processCommand(command) {
  if (command === 'clc') {
    clearOutput();
  } else if (command === 'start') {
    if (currentRiddleIndex < riddles.length) {
      displayRiddle();
    } else {
      addOutputLine('You have already completed all riddles. Type "reset" to start over.');
    }
  } else if (command === 'reset') {
    resetGame();
  } else {
    checkAnswer(command);
  }
}

function clearOutput() {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = '';
}

function displayRiddle() {
  const riddle = riddles[currentRiddleIndex];
  // Here we are using innerHTML to parse the HTML tags
  addOutputLine(`<strong>${riddle.question}</strong><br>`); // Adding a break (<br>) for spacing
}

function addOutputLine(message) {
  const outputElement = document.getElementById('output');
  const newLine = document.createElement('div');
  newLine.innerHTML = message;
  outputElement.appendChild(newLine);
  outputElement.scrollTop = outputElement.scrollHeight; // Scroll to bottom of output
}

function checkAnswer(answer) {
  const riddle = riddles[currentRiddleIndex];
  if (answer === riddle.answer) {
    addOutputLine('Correct!');
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
      displayRiddle();
    } else {
      addOutputLine('Congratulations, you have solved all the riddles!');
      addOutputLine('A surprise is loading for you...');
      showLoadingBar(); // Call the showLoadingBar function here
    }
  } else {
    addOutputLine('Incorrect. Try again.');
  }
}

function showLoadingBar() {
  const outputElement = document.getElementById('output');
  const loadingBarContainer = document.createElement('div');
  loadingBarContainer.className = 'loading-bar-container';
  const loadingBar = document.createElement('div');
  loadingBar.className = 'loading-bar';
  loadingBarContainer.appendChild(loadingBar);
  outputElement.appendChild(loadingBarContainer);

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      showSurprise(); // Show the surprise image after loading completes
    } else {
      width++;
      loadingBar.style.width = width + '%';
    }
  }, 20); // Adjust the interval as needed
}

function showSurprise() {
  // Get the terminal and output elements
  const terminal = document.getElementById('terminal');
  const outputElement = document.getElementById('output');

  // Clear previous content and display the image
  outputElement.innerHTML = ''; // Clear any text
  const img = document.createElement('img');
  img.src = 'data/image.jpg'; // Assuming your image is in a folder named 'data'
  img.alt = 'Bachelor Degree Memories';
  img.style.maxWidth = '60%'; // Ensures the image fits within the terminal element
  img.style.borderRadius = '5px'; // Optional styling

  terminal.appendChild(img); // Add the image to the terminal
}


function resetGame() {
  currentRiddleIndex = 0;
  clearOutput();
  displayWelcomeMessage();
}