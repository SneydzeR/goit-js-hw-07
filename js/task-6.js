const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = input.value;
  destroyBoxes();
  let widthHeight = 30;
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${widthHeight}px`;
      div.style.height = `${widthHeight}px`;
      div.style.backgroundColor = `${getRandomHexColor()}`;
      boxes.append(div);
      widthHeight += 10;
    }
  }
}
function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);