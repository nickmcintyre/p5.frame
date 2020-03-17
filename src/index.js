import p5 from 'p5';
import * as aframe from 'aframe';


class Scene {
  constructor() {
    this.elt = createElement('a-scene');
  }
  
  child(entity) {
    this.elt.child(entity.elt);
  }
}


function createScene() {
  noCanvas();
  angleMode(DEGREES);
  p5.prototype._scene = new Scene();
}


class Primitive {
  constructor(x, y, z) {
    this._position = createVector(x, y, z);
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this._id = '';
    for (let i = 0; i < 10; i += 1) {
      this._id += chars.charAt(floor(random(chars.length)));
    }
  }
  
  color(c) {
    let cc = color(c)
    this.elt.attribute('color', cc.toString('#rrggbb'));
  }
  
  rotation(x, y, z) {
    this.elt.attribute('rotation', `${x} ${y} ${z}`);
  }
  
  position(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      return this._position;
    }

    this._position.set(x, y, z);
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }

  id(id) {
    if (typeof id === 'undefined') {
      return this._id;
    }

    this._id = id;
  }
}


class Box extends Primitive {
  constructor(x, y, z) {
    super(x, y, z);
    this.elt = createElement('a-box');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }
}


function createBox(x, y, z) {
  const b = new Box(x, y, z);
  p5.prototype._scene.child(b);

  return b;
}


class Sphere extends Primitive {
  constructor(x, y, z) {
    super(x, y, z);
    this.elt = createElement('a-sphere');
    this.elt.attribute('position', `${this._position.x} ${this._position.y} ${this._position.z}`);
  }
}


function createSphere(x, y, z) {
  const s = new Sphere(x, y, z);
  p5.prototype._scene.child(s);

  return s;
}


p5.prototype.createScene = createScene;
p5.prototype.createBox = createBox;
p5.prototype.createSphere = createSphere;


export default p5;
