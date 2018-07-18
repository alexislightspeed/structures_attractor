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
  square = new Square();
}

function draw() {
  background(Colors.bg);
  square.move();
  square.render();
}

// Shape class
class Shape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.width = 10;
    this.height = 10;
    this.speedX = random(-1,10);
    this.speedY = random(-1,10);
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
  }

  render() {
    noStroke();
    fill(Colors.coral200);
    rect(this.x, this.y, this.width/2, this.height);
    fill(Colors.coral100);
    rect(this.x + this.width/2, this.y, this.width/2, this.height);
  }
}
