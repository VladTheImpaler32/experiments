let total = 20;
let points = [];
let stages = [];
let Delay = 100;
let choice = 0;

function setup() {
  createCanvas(800, 600);
  background(0);

  bubble = createButton("Bubble Sort", "0");
  bubble.mousePressed(makeChoice);
  insert = createButton("Insertion Sort", "1");
  insert.mousePressed(makeChoice);
  selection = createButton("Selection Sort", "2");
  selection.mousePressed(makeChoice);
}

function makeChoice() {
  let val = this.value();
  stages = [];
  points = [];
  createRandArray();
  background(0);
  switch (parseInt(this.value())) {
    case 0:
      bubbleSort();
      break;

    case 1:
      insertionSort();
      break;

    case 2:
      selectionSort();
      break;
  }
}

function createRandArray() {
  for (let i = 0; i < total; i++) {
    points.push(i);
  }

  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [points[i], points[j]] = [points[j], points[i]];
  }
}

function draw() {
  display();
}

function display() {
  background(0);
  xSep = width / stages.length;
  ySep = height / total;
  for (let j = 0; j < total; j++) {
    beginShape();
    noFill();
    colorMode(HSB, total);
    stroke(points[j], total, total);
    for (let i = 0; i < stages.length; i++) {
      strokeWeight(1);
      x = xSep / 2 + i * xSep;
      y = ySep / 2 + stages[i].indexOf(j) * ySep;
      curveVertex(x, y);
      if (i == 0 || i == stages.length - 1) curveVertex(x, y);
      push();
      strokeWeight(5);
      point(x, y);
      pop();
      prevX = x;
      prevY = y;
    }
    endShape();
  }
}

function bubbleSort() {
  for (let i = 0; i < total - 1; i++) {
    let temp = 0;
    setTimeout(function () {
      for (let j = 0; j < points.length; j++) {
        if (points[j] >= points[j + 1]) {
          temp = points[j];
          points[j] = points[j + 1];
          points[j + 1] = temp;
        }
      }
      stages.push(points.slice());
      // display();
    }, i * Delay);
  }
}

function insertionSort() {
  for (let i = 1; i < total; i++) {
    setTimeout(function () {
      let temp = points[i];
      let j = i - 1;
      while (j > -1 && points[j] > temp) {
        points[j + 1] = points[j];
        j--;
      }
      points[j + 1] = temp;
      stages.push(points.slice());
      display();
    }, i * Delay);
  }
}

function selectionSort() {
  for (let i = 0; i < total; i++) {
    setTimeout(function () {
      let temp = 0;
      let lowest = i;
      for (let j = i + 1; j < total; j++) {
        if (points[j] < points[lowest]) {
          lowest = j;
        }
      }
      if (lowest !== i) {
        temp = points[i];
        points[i] = points[lowest];
        points[lowest] = temp;
      }
      stages.push(points.slice());
      display();
    }, i * Delay);
  }
}
