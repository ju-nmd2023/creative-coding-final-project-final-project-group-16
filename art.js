let heart;

// function preload() {
//   // Ladda en .obj eller .stl fil (måste ligga i projektmappen)
//   heart = loadModel("Heart.obj", true);
// }

// function setup() {
//   createCanvas(innerWidth, innerHeight, WEBGL);
//   colorMode(RGB);
// }

function drawArt() {
  //   background(0, 0, 0);
  //   clear();

  rotateY(frameCount * 0.01); // rotera modellen
  rotateX(frameCount * 0.01);

  normalMaterial(); // enkel färg baserad på ljus
  scale(2); // ändra storlek om modellen är för liten/stor
  model(heart);
}
