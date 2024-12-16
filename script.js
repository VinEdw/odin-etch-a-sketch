const gridContainer = document.querySelector("#grid-container");
const resolutionButton = document.querySelector("#grid-resolution-button");

function createGrid(container, resolution) {
  container.textContent = "";
  for (let i = 0; i < resolution; ++i) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    for (let j = 0; j < resolution; ++j) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.opacity = 0;
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function shiftCellOpacity(cell, opacityChange) {
  let newOpacity = +cell.dataset.opacity + opacityChange;
  newOpacity = Math.max(0, Math.min(newOpacity, 1));
  cell.dataset.opacity = newOpacity;
}

gridContainer.addEventListener("mouseover", (e) => {
  const el = e.target;
  if (el.classList.contains("grid-cell")) {
    shiftCellOpacity(el, 0.1)
    el.style.backgroundColor = `rgba(0, 0, 0, ${el.dataset.opacity})`
  }
});

resolutionButton.addEventListener("click", (e) => {
  const newResolution = +prompt("Enter the number of squares per side of a new grid (between 1 and 100)");
  if (newResolution > 0 && newResolution <= 100) {
    createGrid(gridContainer, newResolution);
  }
});

createGrid(gridContainer, 16);
