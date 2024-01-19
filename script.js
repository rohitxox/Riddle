const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');

terminalInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    processCommand(this.value);
    this.value = '';
  }
});

function processCommand(input) {
  const trimmedInput = input.trim();
  if (trimmedInput === '14/03/2023') {
    terminalOutput.textContent += `\n> ${trimmedInput}\nCorrect! You've escaped the PC!`;
  } else {
    terminalOutput.textContent += `\n> ${trimmedInput}\nIncorrect. Try again.`;
  }
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}
