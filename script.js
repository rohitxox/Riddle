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
    }
  } else {
    addOutputLine('Incorrect. Try again.');
  }
}

function resetGame() {
  currentRiddleIndex = 0;
  clearOutput();
  displayWelcomeMessage();
}
