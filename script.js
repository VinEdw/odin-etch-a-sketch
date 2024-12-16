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
resolutionButton.addEventListener("click", (e) => {
  const newResolution = +prompt("Enter the number of squares per side of a new grid (between 1 and 100)");
  if (newResolution > 0 && newResolution <= 100) {
    createGrid(gridContainer, newResolution);
  }
});

createGrid(gridContainer, 16);
