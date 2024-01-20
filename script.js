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

document.addEventListener('DOMContentLoaded', () => {
  const outputElement = document.getElementById('output');
  const inputElement = document.getElementById('input');
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      this.value = ''; // Clear the input
      addCommandToOutput(command);
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

function addCommandToOutput(command) {
  const outputElement = document.getElementById('output');
  const newCommand = document.createElement('div');
  newCommand.textContent = `guest@itsrohit.xo$ ${command}`;
  outputElement.appendChild(newCommand);
}

function displayRiddle() {
  const outputElement = document.getElementById('output');
  const riddleQuestion = document.createElement('div');
  riddleQuestion.textContent = riddles[currentRiddleIndex].question;
  outputElement.appendChild(riddleQuestion);
}

function checkAnswer(answer) {
  const outputElement = document.getElementById('output');
  const feedback = document.createElement('div');
  if (answer === riddles[currentRiddleIndex].answer) {
    feedback.textContent = 'Correct!';
    outputElement.appendChild(feedback);
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
      displayRiddle();
    } else {
      feedback.textContent = 'You have solved all the riddles. Congratulations!';
      currentRiddleIndex = 0; // Reset or end game
    }
  } else {
    feedback.textContent = 'Incorrect. Try again.';
    outputElement.appendChild(feedback);
    displayRiddle(); // Display the same riddle again
  }
}

function clearOutput() {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = '';
}
