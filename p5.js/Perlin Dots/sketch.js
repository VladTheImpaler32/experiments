let t = 0;
let toggle = false;

function setup() {
  canvas = createCanvas(800, 800);
  canvas.mouseClicked(click);
  createP('Click canvas to pause.');
}

function draw() {
  let increment = 0.01;
  let noiseScale = 20;
  
  background('black');
  let yOffset = 0;
  for (let j = 1; j < ((height)/15); j++) {
    let xOffset = 0;
    for (let i = 1; i < ((width)/15); i++) {
      
      stroke('white');
      noiseDetail(4);
      n = noise(t + xOffset, t + yOffset) * noiseScale;
      point(i*n+50, j*n+50);
    
      xOffset += increment/2;
    }
    yOffset += increment;
  }
  t += 0.0025;
}

function click() {
  toggle = !toggle;
  if (toggle == false) {
      loop();
    } else {
      noLoop();
    }
}