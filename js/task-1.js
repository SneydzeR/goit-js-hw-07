const list = document.querySelector('#categories');
const listEl = list.querySelectorAll('.item');
const length = list.children.length;
console.log(`Number of categories: ${length}`);
listEl.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});