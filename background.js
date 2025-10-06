// This code was inspired by Garrit's noise example code
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(20);
}

const size = 10;
const divider = 60;
const numRows = innerHeight / size;
const numCols = innerWidth / size;

let counter = 0;

function draw() {
  background(0, 61, 106);
  noStroke();

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;

      if (value < size / 2) {
        fill(0, 89, 155);
      } else {
        fill(0, 117, 204);
      }

      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  counter += 0.01;
}
