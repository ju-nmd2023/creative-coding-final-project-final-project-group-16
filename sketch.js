let song;
let amplitude;

// These 7 lines of code and line 15 was adapted from https://www.perplexity.ai/search/detta-ar-min-kod-i-3-olika-js-5jNMQYX1TguHEQfhCCBuwQ?0=d#1 Accessed: 11-10-2025
let handpose;
let video;
let hands = [];
let lastX = null;
let defaultRotationSpeed = 0.01; // Standard långsam rotation (kan testas lägre eller högre)
let rotationSpeed = 0;
let baseRotation = 0;

function preload() {
  song = loadSound("sza.mp3");
  preloadArt();
  handpose = ml5.handPose();
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  setupArt();
  amplitude = new p5.Amplitude();

  // These 4 lines of code was adapted from https://www.perplexity.ai/search/detta-ar-min-kod-i-3-olika-js-5jNMQYX1TguHEQfhCCBuwQ?0=d#1 Accessed: 11-10-2025
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  handpose.detectStart(video, getHandsData);

  // song.loop();
  song.play();

  setupBackground();
  frameRate(30);
}

function draw() {
  drawBackground2D();
  renderBackgroundIn3D();

  let level = 0;
  if (amplitude) {
    level = amplitude.getLevel(); // will be 0 if nothing detected
  }
  // These 15 lines of code was adapted from https://www.perplexity.ai/search/detta-ar-min-kod-i-3-olika-js-5jNMQYX1TguHEQfhCCBuwQ?0=d#1 Accessed: 11-10-2025
  // Kolla hand-positions och räkna ut swipe
  if (hands.length > 0 && hands[0].index_finger_tip) {
    let x = hands[0].index_finger_tip.x;
    if (lastX !== null) {
      let dx = x - lastX; // Dämpa rörelsen så att den känns mjuk men responsiv
      rotationSpeed = lerp(rotationSpeed, dx * 0.005, 0.3);
    }
    lastX = x;
  } else {
    // Glid långsamt tillbaka
    rotationSpeed = lerp(rotationSpeed, 0, 0.05);
  }
  // Lägg till rotationen
  baseRotation += defaultRotationSpeed + rotationSpeed;
  // Skicka baseRotation till drawArt istället för frameCount*0.01

  push();
  drawArt(level);
  pop();
}

// These 7 lines of code was adapted from https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound Accessed: 07-10-2025
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

//ChatGPT helped us to make sure that the background is far behind the heart, and to create function windowResized to make sure the background is filling the whole canvas. https://chatgpt.com/share/68e65701-9030-8011-b217-c7e38f16f7b5 Accessed: 08-10-2025
function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  bgGraphics = createGraphics(innerWidth, innerHeight);
}

// These 2 lines of code was adapted from https://www.perplexity.ai/search/detta-ar-min-kod-i-3-olika-js-5jNMQYX1TguHEQfhCCBuwQ?0=d#1 Accessed: 11-10-2025
function getHandsData(results) {
  hands = results;
}
