const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

function changeName(event) {
  if (textInput.value.trim()) {
    textOutput.innerHTML = textInput.value.trim();
  } else {
    textOutput.textContent = 'Anonymous';
  }
}
textInput.addEventListener('input', changeName);