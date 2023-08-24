const gridInput = document.querySelector("input");
const gridLayoutDisplay = document.querySelector(".current-grid-layout");
const generateGridLayoutBtn = document.querySelector(".generate-new-layout");
const sketchPad = document.querySelector(".sketch-pad");

generateGridLayoutBtn.addEventListener("click", () => {
    let value = gridInput.value;
    generateGrids(value);
});

gridInput.addEventListener("input", (e) => {
  let value = e.target.value;
  gridLayoutDisplay.textContent = `${value} by ${value}`;
});

function generateGrids(gridsCount = 16) {
    console.log(gridsCount);
    console.log(sketchPad.style.width);
    // const width = sketchPad.style.width = "550px";
    // const height = sketchPad.style.height = "550px";

    // const gridWidth = width / gridsCount;
    // const gridHeight = height / gridsCount;

    // sketchPad.textContent = "";

    // for (let i = 0; i < gridsCount * gridsCount; i++) {
    //     const grid = document.createElement("div");
    //     grid.classList.add("grid");
    //     grid.style.height = gridHeight + "px";
    //     grid.style.width = gridWidth + "px";
    //     sketchPad.appendChild(grid);
    // }
}
