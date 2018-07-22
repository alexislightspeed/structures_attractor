let Colors = {
  coral100:"#F2E6E6",
  coral200:"#F86E70",
  purple100:"#DE97CF",
  purple200:"#711B5F",
  purple300:"#270220",
  white:"#fff",
  bg:"#050C2B"
}

let allTheShapes = [];
let maxShapes = 30;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(Colors.bg);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(Colors.bg);
  fill('#faa');

  push();
  translate(500, 500);
  rotate(angle);
  rect(0, 0, 50, 100);
  pop();
  //
  push();
  translate(100, 100);
  rotate(-(angle++));
  rect(0, 0, 50, 100);
  pop();
}
