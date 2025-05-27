const inputElem = document.querySelector('input#name-input');
const outputElem = document.querySelector('span#name-output');

inputElem.addEventListener('input', (e) => {
  if (e.target.value.trim() === '') {
    outputElem.textContent = 'Anonymous';
  } else {
    outputElem.textContent = e.target.value.trim();
  }
});