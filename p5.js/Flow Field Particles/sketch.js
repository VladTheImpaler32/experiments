let inc = 0.05;
let scl = 20;
let cols, rows, angle, fr, info;
let zOff = 0;
let particles = [];
let flowfield = [];
let toggle = false;

function setup() {
  canvas = createCanvas(800, 800);
  canvas.mouseClicked(click);
  cols = floor(width / scl);
  rows = floor(height / scl);
  info = createP('');
  fr = createP('');

  flowfield = new Array(rows * cols);

  for (let i = 0; i < 2500; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  // background(255);
  yOff = 0;
  for (let y = 0; y < rows; y++) {
    let xOff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      angle = noise(xOff, yOff, zOff) * TWO_PI * 3;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowfield[index] = v;
      xOff += inc;

      //             stroke(0, 25)
      //             push();
      //             translate(x*scl,y*scl)
      //             rotate(v.heading());
      //             strokeWeight(1);
      //             line(0,0,scl,0);
      //             pop();
    }
    yOff += inc;
    zOff += 0.00005;
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show(angle);
  }
  info.html('Click canvas to pause.')
  fr.html('FPS: ' + floor(frameRate()));
}

function click() {
  toggle = !toggle;
  if (toggle == false) {
    loop();
  } else {
    noLoop();
  }
}
