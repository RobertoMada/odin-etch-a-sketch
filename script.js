const gridElement = document.querySelector('.grid-container');
const gridSizeElemnt = document.querySelector('#grid-selector');
const gridSizeDisplayElement = document.querySelector('#grid-size');
const colorInputElement = document.querySelector('.color-selector');
const clearElement = document.querySelector('.clear-button');
const toggleButtonElement = document.querySelectorAll('.toggle-button');


var gridSize;
var colorValue;

generateGrid();
var divElement = document.querySelectorAll('.grid-division');


function changeColor(){
  colorValue = colorInputElement.value;
}


function rainbowColor(){
  colorValue = '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function clearGrid(){
  divElement.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
}


function getGridSize(){
  gridSizeDisplayElement.textContent = `${gridSizeElemnt.value} x ${gridSizeElemnt.value}`;
  gridElement.innerHTML = '';
  generateGrid();
}

function generateGrid(){
  gridSize = Math.pow(Number(gridSizeElemnt.value), 2);

  for(let i = 0; i < gridSize; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-division');
    div.style.width = `${500/Number(gridSizeElemnt.value)}px`;
    div.style.height = `${500/Number(gridSizeElemnt.value)}px`;
    gridElement.appendChild(div);
  }
   divElement = document.querySelectorAll('.grid-division');
   colorGame();
}

gridSizeElemnt.addEventListener('input', getGridSize);
colorInputElement.addEventListener('change', changeColor);
clearElement.addEventListener('click', clearGrid);



function colorGame(){
divElement.forEach((div) => {
  div.addEventListener('mouseover', () => {
    const activeButton = document.querySelector('.active');
    if(activeButton.textContent === 'Color Mode'){
      changeColor();
      div.style.backgroundColor = colorValue;
    } else if(activeButton.textContent === 'Rainbow Mode'){
      console.log('rainbow mode');
      rainbowColor();
      div.style.backgroundColor = colorValue;
    }else{
      div.style.backgroundColor = 'white';
    }
  });
});
}


toggleButtonElement.forEach((button) => {
  button.addEventListener('click', function (e){
    if(!e.target.classList.contains('active')){
      const activeButton = document.querySelector('.active');
      activeButton.classList.remove('active');
      e.target.classList.add('active');
    }
  })
});
