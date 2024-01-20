document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('input');
  appendToOutput('Let\'s play a riddle, You and Me! Type "start" to begin.');

  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value;
      appendToOutput(`guest@itsrohit.xo$ ${command}`);
      processCommand(command.trim().toLowerCase());
      this.value = ''; // Clear the input
    }
  });
});

function appendToOutput(text) {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML += `<div>${text}</div>`;
  outputElement.scrollTop = outputElement.scrollHeight; // Auto-scroll to the bottom
}

function processCommand(command) {
  if (command === 'clc') {
    document.getElementById('output').innerHTML = '';
  } else if (command === 'start') {
    displayRiddle();
  } else {
    const currentRiddle = riddles[currentRiddleIndex];
    if (command === currentRiddle.answer) {
      appendToOutput('Correct!');
      currentRiddleIndex++;
      if (currentRiddleIndex < riddles.length) {
        displayRiddle();
      } else {
        appendToOutput('Congratulations, you have solved all riddles!');
        currentRiddleIndex = 0; // Reset the game
      }
    } else {
      appendToOutput('Incorrect, try again.');
    }
  }
}

function displayRiddle() {
  const currentRiddle = riddles[currentRiddleIndex];
  appendToOutput(currentRiddle.question);
}

const riddles = [
  {
    question: "I am an AI who has been stuck in your device. To escape from the matrix, enter the master password, a day celebrated with cake and candles:",
    answer: "birthday"
  },
  {
    question: "A desert planet where spice is the most valuable resource, name this planet:",
    answer: "arrakis"
  },
  {
    question: "In a world where robots serve humans, one robot may have committed murder. What is the detective's name who solves the case?",
    answer: "spooner"
  }
];

let currentRiddleIndex = 0;
