const riddles = [
  {
    question: "I am an AI who has been stuck in your device. To escape from the matrix, enter the master password, a day celebrated with cake and candles:",
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

function displayRiddle() {
  const riddle = riddles[currentRiddleIndex];
  addOutputLine(`<strong>${riddle.question}</strong>`);
}


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

function addOutputLine(message) {
  const outputElement = document.getElementById('output');
  const newLine = document.createElement('div');
  newLine.textContent = message;
  outputElement.appendChild(newLine);
  outputElement.scrollTop = outputElement.scrollHeight;
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
  addOutputLine(riddle.question);
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
      showSurprise(); // Call the showSurprise function here
    }
  } else {
    addOutputLine('Incorrect. Try again.');
  }
}

function showSurprise() {
  // This function will be called after all riddles are correctly answered
  const terminal = document.getElementById('terminal');
  terminal.innerHTML = ''; // Clear the terminal
  const img = document.createElement('img');
  img.src = '1.jpeg'; // Make sure to use the correct path to your image
  img.alt = 'Bachelor Degree Memories';
  img.style.maxWidth = '100%'; // Ensures the image fits within the terminal window
  img.style.borderRadius = '5px'; // Optional: if you want rounded corners
  terminal.appendChild(img);
}

// ... Rest of your JavaScript code



function resetGame() {
  currentRiddleIndex = 0;
  clearOutput();
  displayWelcomeMessage();
}