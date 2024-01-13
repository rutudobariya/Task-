
let displayContent = '';

function appendToDisplay(value) {
  displayContent += value;
  updateDisplay();
}

function clearDisplay() {
  displayContent = '';
  updateDisplay();
}

function calculateResult() {
  try {
    displayContent = eval(displayContent).toString();
    updateDisplay();
  } catch (error) {
    displayContent = 'Error';
    updateDisplay();
  }
}

function addDecimal() {
  if (!displayContent.includes('.')) {
    displayContent += '.';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = displayContent;
}
