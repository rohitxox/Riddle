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
    answer: "spooner" // The answer is Del Spooner, but we use a simplified version for the riddle.
  }
];

let currentRiddleIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const outputElement = document.getElementById('output');
  appendLineToOutput('Let\'s play a riddle, You and Me! Type "start" to begin.');

  const inputElement = document.getElementById('input');
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      this.value = ''; // Clear the input field
      appendLineToOutput(`guest@itsrohit.xo$ ${command}`);
      handleCommand(command);
    }
  });
});

function appendLineToOutput(line) {
  const outputElement = document.getElementById('output');
  const newLine = document.createElement('div');
  newLine.textContent = line;
  outputElement.appendChild(newLine);
  outputElement.scrollTop = outputElement.scrollHeight; // Scroll to the bottom
}

function handleCommand(command) {
  if (command === 'clc') {
    clearOutput();
  } else if (command === 'start') {
    displayRiddle();
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
  appendLineToOutput(riddle.question);
}

function checkAnswer(answer) {
  const riddle = riddles[currentRiddleIndex];
  if (answer === riddle.answer) {
    currentRiddleIndex++;
    appendLineToOutput('Correct!');
    if (currentRiddleIndex < riddles.length) {
      displayRiddle();
    } else {
      appendLineToOutput('You have solved all the riddles. Congratulations!');
      currentRiddleIndex = 0; // Reset or end game
    }
  } else {
    appendLineToOutput('Incorrect. Try again.');
  }
}
