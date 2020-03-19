let sky;
let bubble;
let noiseLevel = 0.5;
let stepSize = 0.01;

function setup() {
  createScene();
  sky = createSky();
  sky.src('#skyTexture');

  bubble = createSphere(0, 0, -5);
  bubble.color(255, 50);
}

function draw() {
  let y = frameCount / 100;
  bubble.position(0, y, -5);
}
