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
  outputElement.textContent = 'Let\'s play a riddle, You and Me! Type "start" to begin.';

  const inputElement = document.getElementById('input');
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      this.value = ''; // Clear the input field
      executeCommand(command);
    }
  });
});

function executeCommand(command) {
  const outputElement = document.getElementById('output');
  outputElement.textContent += `\n${command}`;
  if (command === 'clc') {
    outputElement.textContent = '';
  } else if (command === 'start') {
    outputElement.textContent += `\n${riddles[0].question}`;
  } else {
    const currentRiddle = riddles.find(riddle => riddle.question === outputElement.textContent.split('\n').slice(-1)[0]);
    if (currentRiddle && command === currentRiddle.answer) {
      outputElement.textContent += `\nCorrect!`;
    } else {
      outputElement.textContent += `\nIncorrect. Try again.`;
    }
  }
}
