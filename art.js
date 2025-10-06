let heart;
let tex; // textur (grafik från createGraphics)

let scaleNoise = 50;
let resolution = 0.002;
let numPoints = 100;

let radius = 150;
let numRings = 20;
let counter = 0;

function preload() {
  heart = loadModel("Heart.obj", true);
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);

  // Skapa en offscreen-canvas för texturen
  tex = createGraphics(400, 400);
  tex.noFill();
  tex.stroke(0);
  tex.strokeWeight(1);
}

function draw() {
  background(200);

  // --- RITA TEXTUREN PÅ OFFSCREEN-CANVASEN ---
  tex.background(255);
  tex.push();
  tex.translate(tex.width / 2, tex.height / 2);
  tex.rotate(counter * 0.02); // rotation av linjemönstret

  for (let r = 0; r <= radius; r += radius / numRings) {
    tex.beginShape();
    for (let a = 0; a <= TAU; a += TAU / numPoints) {
      let x = r * cos(a);
      let y = r * sin(a);
      let n = map(
        noise(x * resolution, y * resolution),
        0,
        1,
        -scaleNoise,
        scaleNoise
      );
      tex.curveVertex(x + n, y + n);
    }
    tex.endShape(CLOSE);
  }
  tex.pop();
  counter++;

  // --- RITA HJÄRTAT MED TEXTUREN ---
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);

  texture(tex); // applicera “ringar”-grafiken som textur
  scale(2);
  model(heart);
}
