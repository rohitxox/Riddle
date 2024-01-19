document.addEventListener('DOMContentLoaded', (event) => {
    displayMessage('Let\'s play a riddle, you and me!');

    displayMessage('I am an AI who has been stuck in your device. To escape from the matrix, enter the password, a date where people celebrate and give surprises:');
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    // This will wait for 5 seconds (5000 milliseconds) before displaying the message
      displayMessage('Hey! I am Riddle. Let\'s solve a riddle. Some fun and horror theme.');
      setTimeout(() => {
      displayMessage('I am stuck in your device. To escape, enter the master password, a date where people celebrate and give surprises:');
    }, 1000); // 1000 milliseconds = 1 seconds
  });
  
  // ... rest of your JavaScript code ...
  

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
  

