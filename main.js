const gridInput = document.querySelector("input");
const gridLayoutDisplay = document.querySelector(".current-grid-layout");
const generateGridLayoutBtn = document.querySelector(".generate-new-layout");
const sketchPad = document.querySelector(".sketch-pad");
const colorDisplay = document.querySelector(".color-display")
const clearSketchPad = document.querySelector(".clear-sketch-pad");




let displayedGrids = 0;
let penColor = "black";

clearSketchPad.addEventListener("click", () => {
  generateGrids(displayedGrids)
});

generateGridLayoutBtn.addEventListener("click", () => {
    let value = gridInput.value;
    generateGrids(value);
});

const defaultColorChoices = document.querySelectorAll(".colors");

defaultColorChoices.forEach((colorBox) => {
  if (colorBox === defaultColorChoices[0]) {
    colorBox.style.backgroundColor = "black";
    return;
  }
  colorBox.style.backgroundColor = getRndRGB();
})

gridInput.addEventListener("input", (e) => {
  let value = e.target.value;
  gridLayoutDisplay.textContent = `${value} by ${value}`;
});

function generateGrids(gridsCount = 16) {
    const styles = window.getComputedStyle(sketchPad);
    const width = styles.width.replace("px", "");
    const height = styles.width.replace("px", "");

    const gridWidth = width / gridsCount;
    const gridHeight = height / gridsCount;

    sketchPad.textContent = "";

    for (let i = 0; i < gridsCount * gridsCount; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.height = gridHeight + "px";
        grid.style.width = gridWidth + "px";
        sketchPad.appendChild(grid);
        grid.addEventListener("mouseover", changeGridBackgroundColor);
    }

    displayedGrids = gridsCount;
}

function generateRndInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRndRGB() {
  return `rgb(${generateRndInt(255, 0)}, ${generateRndInt(255, 0)}, ${generateRndInt(255, 0)})`;
}

function changeGridBackgroundColor() {
  let backgroundColor = penColor;
  colorDisplay.style.backgroundColor = backgroundColor;
  this.style.backgroundColor = backgroundColor;
}

generateGrids();

// todo: work on generating grids
// todo: think on mousedown functionality
// todo: add a settings object to keep track of pad configs