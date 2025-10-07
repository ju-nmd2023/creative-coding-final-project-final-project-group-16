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

// These 7 lines of code was adapted from https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound Accessed: 07-10-2025
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
