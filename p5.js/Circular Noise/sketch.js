let a = 0;
let xNoise;

function setup() {
  createCanvas(800, 800);
  xNoise = new noiseLoop(0.5, 0, width);
  yNoise = new noiseLoop(0.5, 0, height);

  b = createButton("Redraw");
  b.mousePressed(reset);
}

function reset() {
  a = 0;
  clear();
  noiseSeed();
}

function draw() {
  noFill();
  stroke("rgba(255,255,255,1)");
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < 30; i++) {
    a += 0.01;
    x = xNoise.value(a);
    y = yNoise.value(a);
    curveVertex(x, y);
  }
  endShape();
}
