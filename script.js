const riddles = [
    {
      question: "I am an AI who has been stuck in your device. To escape from the matrix, enter the password, a date where people celebrate and give surprises:",
      answer: "14/03/2023"
    },
    {
      question: "In a world where robots serve humans, one robot may have committed murder. What is the detective's name who solves the case?",
      answer: "spooner" // The answer is Del Spooner, but we use a simplified version for the riddle.
    },
    {
      question: "A desert planet where spice is the most valuable resource, name this planet:",
      answer: "arrakis" // The answer is Arrakis, the desert planet in Dune.
    }
  ];
  
  let currentRiddleIndex = 0;
  
  document.addEventListener('DOMContentLoaded', (event) => {
    displayMessage('Let\'s play a riddle, you and me!');
    setTimeout(() => {
      displayMessage(riddles[currentRiddleIndex].question);
    }, 1000); // 1000 milliseconds = 1 second
  });
  
  function displayMessage(message, addPrompt = true) {
    const terminalOutput = document.getElementById('output');
    terminalOutput.innerHTML += (addPrompt ? '\n> ' : '\n') + message;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
  }
  
  function processCommand(input) {
    const trimmedInput = input.toLowerCase().trim();
    const currentRiddle = riddles[currentRiddleIndex];
    
    if (trimmedInput === 'clc') {
      document.getElementById('output').innerHTML = '';
      displayMessage('Terminal cleared.', false);
    } else if (trimmedInput === currentRiddle.answer) {
      displayMessage('Correct!', false);
      currentRiddleIndex++;
      if (currentRiddleIndex < riddles.length) {
        displayMessage(riddles[currentRiddleIndex].question);
      } else {
        displayMessage('You have solved all riddles. Congratulations!', false);
        // Reset the game or end it here
      }
    } else {
      displayMessage('Incorrect. Try again.', false);
    }
  }
  
  const terminalInput = document.getElementById('input');
  terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      displayMessage(this.value, false); // Show the user input
      processCommand(this.value);
      this.value = ''; // Clear input
    }
  });
  