let arm1,arm2,g,prevX,prevY;

function setup() {
  createCanvas(800, 800);
  stroke(255);
  strokeWeight(2);
  frameRate(144);

  trail = createGraphics(width, height);
  trail.translate(width/2, height/2);
  trail.stroke(255);
  trail.strokeWeight(2);

    arm1 = {
      x: 0,
      y: 0,
      len: 200,
      mass: 0.005,
      ang: PI,
      vel: 0,
      accel: 0
    }
  
    arm2 = {
      x: 0,
      y: 0,
      len: 200,
      mass: 0.005,
      ang: PI+0.001,
      vel: 0,
      accel: 0
    }
    g = 0.5;
}

function draw() {
  arm1.accel = (-g * (2 * arm1.mass + arm2.mass) * sin(arm1.ang) - arm2.mass * g * sin(arm1.ang - 2 * arm2.ang) - 2 * sin(arm1.ang - arm2.ang) * arm2.mass * ((arm2.vel*arm2.vel) * arm2.len + (arm1.vel*arm1.vel) * arm1.len * cos(arm1.ang - arm2.ang))) / (arm1.len * (2 * arm1.mass + arm2.mass - arm2.mass * cos(2 * arm1.ang - 2 * arm2.ang)));
  
  arm2.accel = (2 * sin(arm1.ang - arm2.ang) * ((arm1.vel*arm1.vel) * arm1.len * (arm1.mass + arm2.mass) + g * (arm1.mass + arm2.mass) * cos(arm1.ang) + (arm2.vel*arm2.vel) * arm2.len * arm2.mass * cos(arm1.ang - arm2.ang))) / (arm2.len * (2 * arm1.mass + arm2.mass - arm2.mass * cos(2 * arm1.ang - 2 * arm2.ang)));
    
  background(0);
  trail.background('rgba(0, 0, 0, 0.05)');
  image(trail,0,0, width, height)
  translate(width/2, height/2);
  
  arm1.vel += arm1.accel;
  arm2.vel += arm2.accel;
  arm1.ang += arm1.vel;
  arm2.ang += arm2.vel;
  
  arm1.x = arm1.len * sin(arm1.ang);
  arm1.y = arm1.len * cos(arm1.ang);
  
  arm2.x = arm1.x + arm2.len * sin(arm2.ang);
  arm2.y = arm1.y + arm2.len * cos(arm2.ang);
  
  line(0, 0, arm1.x, arm1.y);
  ellipse(arm1.x, arm1.y, 10);
  
  line(arm1.x, arm1.y, arm2.x, arm2.y);
  ellipse(arm2.x, arm2.y, 10);
  
  if (prevX != undefined && prevY != undefined) {
    trail.line(prevX, prevY, arm2.x, arm2.y);
  }
  
  prevX = arm2.x;
  prevY = arm2.y;
}