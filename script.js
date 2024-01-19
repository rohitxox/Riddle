document.addEventListener('DOMContentLoaded', (event) => {
    displayMessage('Hey! I am Riddle. Let\'s solve a riddle. Some fun and horror theme.');
    displayMessage('I am stuck in your device. To escape, enter the master password, a date where people celebrate and give surprises:');
  });
  
  function displayMessage(message, addPrompt = true) {
    const terminalOutput = document.getElementById('output');
    terminalOutput.innerHTML += (addPrompt ? '\n> ' : '\n') + message;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
  }
  
  function processCommand(input) {
    const trimmedInput = input.trim();
    if (trimmedInput.toLowerCase() === 'clc') {
      document.getElementById('output').innerHTML = '';
      displayMessage('Terminal cleared.', false);
    } else if (trimmedInput === '14/03/2023') {
      displayMessage('Correct! You\'ve escaped the PC!', false);
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
  