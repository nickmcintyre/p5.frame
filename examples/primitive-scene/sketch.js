let cube;
let ball;
let rod;
let spike;
let sheet;
let donut;

function setup() {
  createScene();

  cube = createBox();
  cube.color('fuchsia');

  ball = createSphere(2, 0, -10);
  ball.geom(0.5);
  ball.color('dodgerblue');

  rod = createCylinder(-3, 5, -30);
  rod.geom(0.001, 0.001, 0.001);
  rod.color('chartreuse');

  spike = createCone(2, 0, -2);
  spike.color('coral');
  spike.rotation(-90, 0, 45);

  sheet = createPlane(0, 0, -2.5);
  sheet.color('darkorchid');
  sheet.rotation(45, 0, 45);

  donut = createTorus(2, 0, -10);
  donut.geom(1, 0.1);
  donut.color('hotpink');
}

function draw() {
  cube.rotation(0, 0, frameCount);

  let x = random(-0.01, 0.01);
  let y = random(0.01);
  let z = random(-0.01, 0.005);
  let w = createVector(x, y, z);
  let p = p5.Vector.add(w, ball.position());
  ball.position(p.x, p.y, p.z);
  donut.position(p.x, p.y, p.z);

  let rb = frameCount * 0.005;
  let rt = rb;
  let h = frameCount * 0.01;
  rod.geom(rb, rt, h);
  
  z = 2.5 * sin(frameCount * 360 / 200) - 5;
  sheet.position(0, 0, z);
}
