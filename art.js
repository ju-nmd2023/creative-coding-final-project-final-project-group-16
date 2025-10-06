/*3D heart code: https://chatgpt.com/share/68e3c9a0-192c-8011-b60b-8a3a9b3e86be */

let heart;

function preloadArt() {
  heart = loadModel("Heart_UV.obj", true);
}

function setupArt() {
  createCanvas(innerWidth, innerHeight);
  createCanvas(innerWidth, innerHeight, WEBGL);
}

function drawArt() {
  ellipse(width / 2, height / 2, 100, 100);

  rotateY(frameCount * 0.01); // rotation
  rotateX(frameCount * 0.01);

  normalMaterial(); // color depends on the light
  scale(2); // size of the heart
  model(heart);
}
