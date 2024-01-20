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
  // Display the welcome message
  outputElement.textContent = 'Let\'s play a riddle, You and Me! Type "start" to begin.';
  
  const inputElement = document.getElementById('input');
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = this.value.trim();
      this.value = ''; // Clear the input field
      if (command.toLowerCase() === 'start') {
        displayRiddle(outputElement);
      } else {
        checkAnswer(command.toLowerCase(), outputElement);
      }
    }
  });
});

function displayRiddle(outputElement) {
  // Clear previous output
  setTimeout(() => {
    outputElement.textContent = riddles[currentRiddleIndex].question;
  }, 1000); // Display after 1 second
}

function checkAnswer(answer, outputElement) {
  if (answer === riddles[currentRiddleIndex].answer.toLowerCase()) {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
      outputElement.textContent = 'Correct! Here is the next riddle:';
      setTimeout(() => {
        outputElement.textContent = riddles[currentRiddleIndex].question;
      }, 1000);
    } else {
      outputElement.textContent = 'Correct! You have solved all the riddles. Congratulations!';
      currentRiddleIndex = 0; // Reset if you want to start over
    }
  } else {
    outputElement.textContent = 'Incorrect. Try again.';
  }
}

