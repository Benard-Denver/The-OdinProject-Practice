const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {

  container.innerHTML = "";

  const totalSquares = size * size;
  const squareSize = 960 / size; 

  for (let i = 0; i < totalSquares; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixels");

    pixel.style.width = `${squareSize}px`;
    pixel.style.height = `${squareSize}px`;

    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = "black";
    });

    container.appendChild(pixel);
  }
}

resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter number of squares per side (max 100):");
  size = Number(size);

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

createGrid(16);
