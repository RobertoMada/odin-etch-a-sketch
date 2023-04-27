const gridElement = document.querySelector('.grid-container');
const gridSizeElemnt = document.querySelector('#grid-selector');
const gridSizeDisplayElement = document.querySelector('#grid-size');
var gridSize = 100;

for(let i = 0; i < gridSize; i++){
  const div = document.createElement('div');
  div.setAttribute('class', 'grid-division');
  gridElement.appendChild(div);
}

const divElement = document.querySelectorAll('.grid-division');

divElement.forEach((div) => {

  // and for each one we add a 'click' listener
  div.addEventListener('mouseover', () => {
    div.setAttribute('class', 'red-color');
  });
});

function getGridSize(){
  gridSizeDisplayElement.textContent = 'aaaa';
}
