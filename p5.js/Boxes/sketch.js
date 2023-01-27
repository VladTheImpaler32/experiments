let scl = 50;
let cols, rows;
let inc = 10;
let zOff = 0;
let clr = 0;

function setup() {
  createCanvas(500, 800);
  cols = floor(width / scl-1);
  rows = floor(height / scl-1);
  checkbox = createCheckbox('Color', false);
  checkbox.changed(chng);
}

function chng() {
  if (checkbox.checked()) {
    clr = 1.1;
    loop();
  } else {
    clr = 0;
    loop();
  }
}

function draw() {
  background(0);
  xOff = 0;
  for (let x=1; x<cols; x++){
    yOff = 0;
    for (let y=1; y<rows; y++){
      let n = noise(xOff, yOff, zOff) * 1.5;
      let flip = random() < 0.5 ? -1 : 1;
      push();
      translate(x*scl, y*scl);
      rotate(y*y/200*n*flip);
      noFill();
      colorMode(HSL,clr)
      stroke(n,1,0.7)
      quad(0,0, scl,0, scl,scl, 0,scl);
      pop();
      
      yOff += inc;
    }
    xOff += inc;
  }
  zOff += 0.01
  noLoop();
}