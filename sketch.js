let song;
function preload() {
  // Ladda en .obj eller .stl fil (måste ligga i projektmappen)
  song = loadSound("sza.mp3");
  //heart = loadModel("Heart.obj", true);
  preloadArt();
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  frameRate(20);
  colorMode(RGB);

  setupArt();
  song.play();
}

function draw() {
  drawBackground();
  drawArt();
}

function mousePressed() {
  song.play();
}
