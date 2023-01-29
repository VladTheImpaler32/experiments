let cx, cy;

class noiseLoop {
  constructor(diam, min, max) {
    this.diam = diam;
    this.min = min;
    this.max = max;
    this.cx = random(100);
    this.cy = random(100);
  }

  value(a) {
    let xoff = map(cos(a), -1, 1, this.cx, this.cx + this.diam);
    let yoff = map(sin(a), -1, 1, this.cy, this.cy + this.diam);
    let r = noise(xoff, yoff);
    return map(r, 0, 1, this.min, this.max);
  }
}
