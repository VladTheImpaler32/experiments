let Primaries = [];
let Secondaries = [];
let G = 0.5;
let amount = 500;

function setup() {
  createCanvas(800, 800);
  // background('rgba(0,0,0,1)');
  Primaries.push(
    new Primary(createVector(width / 2, height / 2), 50, 20, "rgba(0,0,0,0)")
  );
  for (let i = 0; i < amount; i++) {
    Secondaries.push(
      new Secondary(
        createVector(random(width), random(height)),
        50,
        1,
        "white",
        createVector(random(1), random(1))
      )
    );
  }
}

function draw() {
  background("rgba(0,0,0,0.25)");

  Primaries.forEach((primary) => {
    primary.update();
    primary.draw();
  });

  Secondaries.forEach((secondary) => {
    secondary.update();
    secondary.draw();
  });
}

class Primary {
  constructor(pos, m, r, color) {
    this.pos = pos;
    this.m = m;
    this.r = r;
    this.color = color;
  }

  draw() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  update() {
    Secondaries.forEach((secondary) => {
      let force = p5.Vector.sub(this.pos, secondary.pos);
      let distSq = constrain(force.magSq(), 100, 1000);
      let strength = G * ((this.m * secondary.m) / distSq);
      force.setMag(strength);
      secondary.apply(force);
    });
  }
}

class Secondary {
  constructor(pos, m, r, color, velocity) {
    this.pos = pos;
    this.m = m;
    this.r = r;
    this.v = velocity;
    this.a = createVector(0, 0);
    this.color = color;
  }

  draw() {
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.r);
  }

  apply(force) {
    this.a.add(p5.Vector.div(force, this.m));
  }

  update() {
    this.v.add(this.a);
    this.pos.add(this.v);
    this.a.set(0, 0);
  }
}
