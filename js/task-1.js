const itemElem = document.querySelectorAll('li.item');

console.log('Number of categories:', itemElem.length);

itemElem.forEach((elem) => {
  const title = elem.querySelector('h2').textContent;
  const listLength = elem.querySelectorAll('ul > li').length;

  console.log('Category:', title);
  console.log('Elements:', listLength);
});