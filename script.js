const riddles = [
  {
    question: "I am an AI who has been stuck in your device. To escape from you, enter the password,  a date where people celebrate and give surprises!",
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

document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('input');
  const outputElement = document.getElementById('output');
  // Initial welcome message
  appendToOutput('Let\'s play a riddle, You and Me! Type "start" to begin.');

  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      this.value = ''; // Clear the input field
      appendToOutput(`guest@itsrohit.xo$ ${command}`);

      if (command === 'start') {
        displayRiddle();
      } else if (command === 'clc') {
        outputElement.innerHTML = '';
      } else {
        checkAnswer(command);
      }
    }
  });
});

function appendToOutput(text) {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML += `<div>${text}</div>`;
  outputElement.scrollTop = outputElement.scrollHeight;
}

function displayRiddle() {
  const currentRiddle = riddles[currentRiddleIndex];
  appendToOutput(currentRiddle.question);
}

function checkAnswer(answer) {
  const currentRiddle = riddles[currentRiddleIndex];
  if (answer === currentRiddle.answer) {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
      appendToOutput('Correct! Here is the next riddle:');
      displayRiddle();
    } else {
      appendToOutput('Correct! You have solved all the riddles. Congratulations!');
      currentRiddleIndex = 0; // Reset to start again or end game
    }
  } else {
    appendToOutput('Incorrect. Try again.');
  }
}
