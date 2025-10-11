// This code was inspired by Garrit's noise example code
// This code was reused from Emma Viitanen's individual portfolio

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

/*
function drawBackground() {
  push();
  translate(0, 0, -1000); // move the background far behind
  background(0, 61, 106, 0); // transparent so it doesn’t clear depth buffer
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
  pop();
}*/

let bgGraphics;

function setupBackground() {
  bgGraphics = createGraphics(innerWidth, innerHeight); // 2D layer
}

function drawBackground2D() {
  bgGraphics.background(0, 61, 106);
  bgGraphics.noStroke();

  const size = 10;
  const divider = 60;

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      const value = noise(x / divider, y / divider, frameCount * 0.01) * size;

      if (value < size / 2) {
        bgGraphics.fill(0, 89, 155);
      } else {
        bgGraphics.fill(0, 117, 204);
      }

      bgGraphics.ellipse(x, y, value);
    }
  }
}

// This function will draw the 2D background behind the 3D scene, ChatGPT: https://chatgpt.com/share/68e65701-9030-8011-b217-c7e38f16f7b5 Accessed: 08-10-2025
function renderBackgroundIn3D() {
  push();
  resetMatrix();

  // Move the plane far behind the heart
  const zDistance = -1200;
  translate(0, 0, zDistance);

  // Compute how large the plane must be to fill the view
  // tan(fov / 2) * distance = half-height of visible area
  const fov = 60 * (PI / 180); // 60° field of view (default in p5.js)
  const visibleHeight = 2 * Math.tan(fov / 2) * Math.abs(zDistance);
  const visibleWidth = visibleHeight * (width / height);

  // Make the background slightly larger to ensure full coverage
  const bgW = visibleWidth * 1.2;
  const bgH = visibleHeight * 1.2;

  // Apply the 2D texture
  texture(bgGraphics);
  noStroke();
  plane(bgW, bgH);

  pop();
}
