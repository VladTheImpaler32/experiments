let video;
let vScale = 9;
let charArr;
let chars = "◙◘■▩●▦▣◚◛◕▨▧◉▤◐◒▮◍◑▼▪◤▬◗◭◖◈◎◮◊◫▰◄◯□▯▷▫▽◹△◁▸▭◅▵◌▱▹▿◠◃◦◟◞◜      ";

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  
  charArr = reverse(chars.split(''));
}

function draw() {
  background(1);
  
  video.loadPixels();
  loadPixels();
  for (let y=0; y<video.height; y++){
    for (let x=0; x<video.width; x++){
      var index = (video.width - x - 1 + y * video.width) * 4;
      let r = video.pixels[index+0];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];
      
      let brightness = (r+g+b)/3
      
      brightMap = floor(map(brightness, 0, 255, 0, charArr.length));
      rectMode(CENTER);
      fill(255);
      // fill(brightness);
      text(charArr[brightMap], x*vScale, y*vScale);
      // circle(x*vScale, y*vScale, brightMap);
    }
  }
}