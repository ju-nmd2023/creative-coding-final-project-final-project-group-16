/*3D heart code: https://chatgpt.com/share/68e3c9a0-192c-8011-b60b-8a3a9b3e86be */
/*Chatgpt helped us with the stripes texure, that is from Nellie's individual assignment: https://chatgpt.com/share/68e3f9ca-c36c-8011-a58a-818878d3da9c */

let heart;
let stripeGraphics;

function preloadArt() {
  heart = loadModel("Heart_UV.obj", true);
}

function setupArt() {
  createCanvas(innerWidth, innerHeight, WEBGL);

  // Create offscreen texture
  stripeGraphics = createGraphics(512, 512);
  stripeGraphics.noiseDetail(4, 0.5);
  generateStripesTexture();
}

function generateStripesTexture() {
  stripeGraphics.background(255);
  stripeGraphics.stroke(0);
  stripeGraphics.noFill();

  let scale = 0.02; // controls irregularity
  let spacing = 6; // controls stripe spacing
  let cols = stripeGraphics.width;
  let rows = stripeGraphics.height;

  // Draw irregular horizontal stripes using Perlin noise
  for (let y = 0; y < rows; y += spacing) {
    stripeGraphics.beginShape();
    for (let x = 0; x < cols; x++) {
      let n = noise(x * scale, y * scale);
      let offset = map(n, 0, 1, -10, 10);
      stripeGraphics.vertex(x, y + offset);
    }
    stripeGraphics.endShape();
  }
}

function drawArt() {
  //   background(255);

  // Add soft lighting so texture appears properly
  ambientLight(150);
  directionalLight(255, 255, 255, 0.25, 0.25, -1);

  // Rotate heart for view
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);

  // Apply stripes texture
  texture(stripeGraphics);
  noStroke();
  scale(2);
  model(heart);
}
