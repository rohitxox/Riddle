document.addEventListener('DOMContentLoaded', (event) => {
    displayMessage('Hey! I am Riddle. Let\'s solve a riddle. Some fun and horror theme.');
  });
  
  function displayMessage(message) {
    const terminalOutput = document.getElementById('output');
    terminalOutput.textContent += `\n> ${message}`;
  }
  
  function processCommand(input) {
    const terminalOutput = document.getElementById('output');
    const trimmedInput = input.trim();
    if (trimmedInput === '14/03/2023') {
      displayMessage('Correct! You\'ve escaped the PC!');
    } else {
      displayMessage('Incorrect. Try again.');
    }
    terminalInput.value = ''; // Clear input
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
  }
  
  const terminalInput = document.getElementById('input');
  terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      processCommand(this.value);
    }
  });