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
  const inputElement = document.getElementById('input');
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      this.value = ''; // Clear the input field
      appendToOutput(`guest@itsrohit.xo$ ${command}`);
      if (command === 'start') {
        displayRiddle();
      } else if (command === 'clc') {
        clearOutput();
      } else {
        checkAnswer(command);
      }
    }
  });
});

function appendToOutput(text) {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML += `<div>${text}</div>`;
  outputElement.scrollTop = outputElement.scrollHeight; // Scroll to the bottom of the output
}

function clearOutput() {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = '';
}

function displayRiddle() {
  const outputElement = document.getElementById('output');
  const currentRiddle = riddles[currentRiddleIndex];
  setTimeout(() => {
    appendToOutput(currentRiddle.question);
  }, 1000); // Display after 1 second
}

function checkAnswer(answer) {
  const outputElement = document.getElementById('output');
  const currentRiddle = riddles[currentRiddleIndex];
  if (answer === currentRiddle.answer) {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
      appendToOutput('Correct! Here is the next riddle:');
      displayRiddle();
    } else {
      appendToOutput('Correct! You have solved all the riddles. Congratulations!');
      currentRiddleIndex = 0; // Reset if you want to start over
    }
  } else {
    appendToOutput('Incorrect. Try again.');
  }
}
