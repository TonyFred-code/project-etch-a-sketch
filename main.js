const gridInput = document.querySelector("input");
const gridLayoutDisplay = document.querySelector(".current-grid-layout");
const generateGridLayoutBtn = document.querySelector(".generate-new-layout");
const sketchPad = document.querySelector(".sketch-pad");
const colorDisplay = document.querySelector(".color-display");
const clearSketchPadBtn = document.querySelector(".clear-sketch-pad");
const defaultColorChoices = document.querySelectorAll(".colors");
const randomColorsBtn = document.querySelector(".rnd-colors");
const dragModeBtn = document.querySelector(".drag-mode-btn");
const hoverModeBtn = document.querySelector(".hover-mode-btn");
const eraserModeBtn = document.querySelector(".eraser");
const colorChoicesTab = document.querySelector(".color-choices");
const colorChoices = document.querySelectorAll(".colors");

const sketchPadSettings = {
  penColor: "black",
  displayedGrids: 16,
  colorMode: "chosen", // chosen or random
  mouseMode: "hover", // hover or drag or eraser
  changePenColor(color) {
    this.penColor = color;
  },
  changeMouseMode(mode) {
    if (mode !== "hover" || mode !== "drag" || mode !== "eraser") {
      console.error("invalid mouse mode");
      return;
    }
    this.mouseMode = mode;
  },
  changeColorMode(mode) {
    if (mode !== "chose" || mode !== "random") {
      console.error("invalid color mode");
      return;
    }
    this.colorMode = mode;
  }
};

colorChoices.forEach((colorChoice) => {
  colorChoice.addEventListener("click", (e) => {
    // change pen color
    let backgroundColor = e.target.getAttribute("data-color");
    sketchPadSettings.changePenColor(backgroundColor);
    // show active color
    colorDisplay.style.backgroundColor = sketchPadSettings.penColor;
    // add active class to it and remove from its siblings
    makeActive(e.target);
  });
});

function makeActive(target) {
  colorChoices.forEach((colorChoice) => {
    colorChoice.classList.remove("active-color");
  });
  target.classList.add("active-color");
}

clearSketchPadBtn.addEventListener("click", () => {
  generateGrids(sketchPadSettings.displayedGrids);
});

generateGridLayoutBtn.addEventListener("click", () => {
  let value = gridInput.value;
  generateGrids(value);
  sketchPadSettings.displayedGrids = value;
});

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
    // grid.addEventListener("mouseover", () => {
    //   changeGridBackgroundColor(grid, sketchPadSettings.penColor)
    // });
  }

  sketchPadSettings.displayedGrids = gridsCount;
}

function generateRndInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRndRGB() {
  return `rgb(${generateRndInt(255, 0)}, ${generateRndInt(
    255,
    0
  )}, ${generateRndInt(255, 0)})`;
}

generateGrids();

// todo: work on generating grids
// todo: think on mousedown functionality
// todo: add a settings object to keep track of pad configs
