function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButtonElem = document.querySelector('button.change-color');
const colorSpanElem = document.querySelector('span.color');

colorButtonElem.addEventListener('click', (e) => {
  const rndColor = getRandomHexColor();
  document.body.style.backgroundColor = rndColor;
  colorSpanElem.textContent = rndColor;
});