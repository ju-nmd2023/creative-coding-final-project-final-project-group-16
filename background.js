// This code was inspired by Garrit's noise example code
// This code was reused from Emma's individual portfolio

// function setup() {
//   createCanvas(innerWidth, innerHeight);
//   frameRate(20);
// }

// const numRows = innerHeight / size;
// const numCols = innerWidth / size;

// let counter = 0;

// function drawBackground() {
//   background(0, 61, 106);
//   noStroke();
//   const size = 10;
//   const divider = 60;

//   for (let y = -height / 2; y < height / 2; y += size) {
//     for (let x = -width / 2; x < width / 2; x += size) {
//       const value = noise(x / divider, y / divider, frameCounter * 0.01) * size;

//       if (value < size / 2) {
//         fill(0, 89, 155);
//       } else {
//         fill(0, 117, 204);
//       }

//       ellipse(x, y, value);
//     }
//   }

//   counter += 0.01;
// }

function drawBackground() {
  background(0, 61, 106);
  noStroke();

  const size = 10;
  const divider = 60;

  for (let y = -height / 2; y < height / 2; y += size) {
    for (let x = -width / 2; x < width / 2; x += size) {
      const value = noise(x / divider, y / divider, frameCount * 0.01) * size;

      if (value < size / 2) {
        fill(0, 89, 155);
      } else {
        fill(0, 117, 204);
      }

      ellipse(x, y, value);
    }
  }
}
