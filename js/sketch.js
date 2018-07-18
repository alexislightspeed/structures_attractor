let Colors = {
  coral100:"#F2E6E6",
  coral200:"#F86E70",
  purple100:"#DE97CF",
  purple200:"#711B5F",
  purple300:"#270220",
  bg:"#050C2B"
}

let allTheShapes = [];
let maxShapes = 10;
let square;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(Colors.bg);

  for (var i = 0; i < maxShapes; i++) {
    allTheShapes[i] = new Square();
  }
}

function draw() {
  background(Colors.bg);

  for (var i = 0; i < allTheShapes.length; i++) {
    allTheShapes[i].move();
    allTheShapes[i].render();
  }

}

// Shape class
class Shape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.width = 10;
    this.height = 10;
    this.speedX = random(-1,1);
    this.speedY = random(-1,1);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || (this.x + this.width > width))
      this.speedX *= -1
    if(this.y < 0 || (this.y + this.height > height))
      this.speedY *= -1

  }
}

class Square extends Shape {
  constructor() {
    super();
    this.width = random(width * 0.025, width * 0.035);
    this.height = this.width;
    this.squareType = Math.floor(random(3));
  }

  render() {
    noStroke();
    switch (this.squareType) {
      case 0:
        //Square 1
        fill(Colors.coral200);
        rect(this.x, this.y, this.width/2, this.height);
        fill(Colors.coral100);
        rect(this.x + this.width/2, this.y, this.width/2, this.height);
        break;
      case 1:
        //Square 2
        fill(Colors.purple200);
        rect(this.x, this.y, this.width/2, this.height);
        fill(Colors.purple100);
        rect(this.x + this.width/2, this.y, this.width/2, this.height);
        break;
      case 2:
        //Square 3
        fill(Colors.purple300);
        rect(this.x, this.y, this.width, this.height);
        fill(Colors.coral200);
        rect(this.x + (this.width * 0.3), this.y + (this.height * 0.3), this.width * 0.45, this.width * 0.45);
        break;
    }
  }
}
