let cube;
let ball;

function setup() {
  createScene();
  cube = createBox(0, 5, -5);
  cube.color('fuchsia');
  ball = createSphere(2, 0, -10);
  ball.color('dodgerblue');
  print(cube.id());
}

function draw() {
  let g = createVector(0, -0.01, 0);
  let p = p5.Vector.add(g, cube.position());
  cube.position(p.x, p.y, p.z);
  cube.rotation(0, 0, frameCount);
  let x = 0.01 * (noise(frameCount) - 0.5);
  let y = 0.1 * (noise(frameCount + 10000) - 0.2);
  let z = 0.01 * (noise(frameCount + 20000) - 0.5);
  let w = createVector(x, y, z);
  p = p5.Vector.add(w, ball.position());
  ball.position(p.x, p.y, p.z);
}
