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
  
  document.addEventListener('DOMContentLoaded', (event) => {
    displayMessage('Welcome to the Riddle Terminal. Type "start" to begin.', false);
  });
  
  function displayMessage(message, addPrompt = true) {
    const terminalOutput = document.getElementById('output');
    if (addPrompt) {
      message = `<span style="color: white;">guest</span><span style="color: magenta;">@cveinnt.com</span><span style="color: white;">$</span> ${message}`;
    }
    terminalOutput.innerHTML += `\n<div class="terminal-line">${message}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
  }
  
  
  
  function processCommand(input) {
    const trimmedInput = input.trim().toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    if (trimmedInput === 'clc') {
      document.getElementById('output').innerHTML = '';
    } else if (trimmedInput === 'start' && currentRiddleIndex === 0) {
      displayMessage(riddles[currentRiddleIndex].question, false);
    } else if (trimmedInput === riddles[currentRiddleIndex].answer.toLowerCase()) { // Convert answer to lowercase for case-insensitive comparison
      displayMessage('Correct!', true);
      currentRiddleIndex++;
      if (currentRiddleIndex < riddles.length) {
        displayMessage(riddles[currentRiddleIndex].question, false);
      } else {
        displayMessage('You have solved all riddles. Congratulations!', true);
        // Reset the game or end it here
      }
    } else {
      displayMessage('Incorrect. Try again.', true);
    }
  }
  
  const terminalInput = document.getElementById('input');
  terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const value = this.value;
      displayMessage(value, true); // Show the user input with a colored prompt
      processCommand(value);
      this.value = ''; // Clear input
    }
  });