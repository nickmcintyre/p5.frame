let sky;
let garden;
let grass;
let tree;
let pond;


function setup() {
  createScene();

  sky = createSky();
  sky.color('skyblue');

  garden = createEntity(0, 0, -10);
  garden.rotation(30, 0, 0);

  grass = createBox(0, 0, 0);
  garden.child(grass);
  grass.geom(5, 0.1, 5);
  grass.color('limegreen');

  tree = createCone(-1.3, 1.5, 0.5);
  garden.child(tree);
  tree.color('forestgreen');
  tree.geom(0.8, 0, 3);

  bush = createSphere(1.5, 0.5, -0.5);
  garden.child(bush);
  bush.color('darkgreen');
  bush.geom(0.5);

  pond = createCylinder(1, 0.01, 1);
  garden.child(pond);
  pond.color('navy');
  pond.geom(0.5, 0.5, 0.1);
}

function draw() {
  let yRotation = 45 * sin(frameCount * 360 / 720);
  garden.rotation(30, yRotation, 0);
}
