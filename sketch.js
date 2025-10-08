let song;

function preload() {
  song = loadSound("sza.mp3");
  preloadArt();
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  setupArt();
  setupBackground();
  song.play();
  frameRate(30);
}

function draw() {
  drawBackground2D();
  renderBackgroundIn3D();

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

/*ChatGPT helped us to make sure that the background is far behind the heart, and to create function windowResized to make sure the background is filling the whole canvas. https://chatgpt.com/share/68e65701-9030-8011-b217-c7e38f16f7b5 */
function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  bgGraphics = createGraphics(innerWidth, innerHeight);
}
