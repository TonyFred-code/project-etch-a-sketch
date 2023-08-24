const gridInput = document.querySelector("input");
const gridLayoutDisplay = document.querySelector(".current-grid-layout");
const generateGridLayoutBtn = document.querySelector(".generate-new-layout");

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
}