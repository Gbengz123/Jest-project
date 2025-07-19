import './style.css'

const ship = document.querySelector('.ship');

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




