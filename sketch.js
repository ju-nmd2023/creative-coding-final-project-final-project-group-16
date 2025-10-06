let song;
function preload() {
  // Ladda en .obj eller .stl fil (måste ligga i projektmappen)
  heart = loadModel("Heart.obj", true);
  song = loadSound("sza.mp3");
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  frameRate(20);
  colorMode(RGB);
  song.play();
}

function draw() {
  drawBackground();
  drawArt();
}

function mousePressed() {
  song.play();
}
