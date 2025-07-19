import './style.css'

const ship = document.querySelector('.ship');
const gameBoard = document.getElementById('game-board')
const cells = document.querySelectorAll('.cell')

let isDragging = false;
let offsetX, offsetY;

ship.addEventListener('mousedown', (e) => {
  isDragging = true;
  // Get mouse offset position relative to the ship
  offsetX = e.clientX - ship.offsetLeft;
  offsetY = e.clientY - ship.offsetTop;
});

// ship snapped X and Y value (the nearest x cell or y cell as we move the mouse)
let snappedX = 80
let snappedY = 80
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // ships rawX and rawY coordinate relative to viewport
  const rawX = e.clientX - offsetX;
  const rawY = e.clientY - offsetY;

  const cellSize = 40;

  snappedX = Math.round(rawX / cellSize) * cellSize;
  snappedY = Math.round(rawY / cellSize) * cellSize;

  ship.style.left = snappedX + 'px';
  ship.style.top = snappedY + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Gets headcell occupied by the ship
function getHeadCellOccupied(x, y) {
  // Gameboard location relative to viewport
  const gameBoardLocation = gameBoard.getBoundingClientRect();

  // get absX and absY position of headcell using ships coordinates (x, y)
  const absX = gameBoardLocation.left + x;
  const absY = gameBoardLocation.top + y;

  //returns all elements from top to bottom in that location
  const elements = document.elementsFromPoint(absX, absY);

  // Get the element at that absolute position
  return elements.find(el => el.classList.contains('cell'));
}

// set coordinate ids for all the cells
function setCellCoordinates(){
  let i = 0 // keep track of column
  let row = 1
  const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  cells.forEach(cell => {
    if(i === column.length){
      i = 0
      row++
    }
    cell.id = `${column[i]}` + `${row}`
    i++
  })
}



