let Colors = {
  coral100:"#F2E6E6",
  coral200:"#F86E70",
  purple100:"#DE97CF",
  purple200:"#711B5F",
  purple300:"#270220",
  bg:"#050C2B"
}

let square;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(Colors.bg);
  square = new Shape();
  square.show();
  print(square.x, square.y);
}

function draw() {
  square.move()
}

// Shape class
class Shape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.width = random(width * 0.025, width * 0.035);
    this.height = this.width;
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  show() {
    noStroke();
    fill(Colors.coral200);
    rect(this.x, this.y, this.width/2, this.height);
    fill(Colors.coral100);
    rect(this.x + this.width/2, this.y, this.width/2, this.height);
  }
}
