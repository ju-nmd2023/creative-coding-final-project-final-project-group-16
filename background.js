// This code was reused from Emma Viitanen's individual portfolio, inspired by Garrit's noise example code

let bgGraphics;

function setupBackground() {
  bgGraphics = createGraphics(innerWidth, innerHeight); // 2D layer
}

//ChatGPT helped us add the square and blurry style to it, with the help of a reference image made by 5amauria "Thermal Heat Map Gradient Wallpaper" on Pinterest https://chatgpt.com/share/68ecc6bf-f8d0-8011-8d8e-0749182dcc97, https://se.pinterest.com/pin/1025694883882951844/
function drawBackground2D() {
  bgGraphics.background(3, 40, 70);
  bgGraphics.noStroke();

  const size = 10;
  const divider = 60;

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      const n = noise(x / divider, y / divider, frameCount * 0.01);
      const value = n * size;

      // Base deep ocean colors
      let oceanCol;
      if (value < size / 2) {
        oceanCol = color(0, 55, 85); // deep teal-navy
      } else {
        oceanCol = color(0, 85, 120); // richer mid-ocean tone
      }

      // Dynamic shimmer — mixes subtle teal and aqua highlights
      const gridFactor = sin(x * 0.03 + y * 0.03 + frameCount * 0.02);
      const blendColor = color(
        0 + gridFactor * 20, // R: very low, to keep blue-green purity
        80 + gridFactor * 40, // G: soft teal glow
        150 + gridFactor * 70 // B: ocean blue shimmer
      );

      // Blend ocean and shimmer tones smoothly
      const finalCol = lerpColor(oceanCol, blendColor, 0.3 + n * 0.25);
      bgGraphics.fill(finalCol);

      // Grid-style pixel shimmer (square waves)
      bgGraphics.rect(x, y, value, value);
    }
  }

  // subtle particle grain — underwater haze
  for (let i = 0; i < 1500; i++) {
    const nx = random(width);
    const ny = random(height);
    const alpha = random(5, 18);
    bgGraphics.stroke(150, 210, 230, alpha); // soft aqua specks
    bgGraphics.point(nx, ny);
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
