function preload() {
  // Ladda en .obj eller .stl fil (måste ligga i projektmappen)
  heart = loadModel("Heart.obj", true);
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  frameRate(20);
  colorMode(RGB);
}

function draw() {
  drawBackground();
  drawArt();
}
