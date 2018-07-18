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
let circle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(Colors.bg);

  let randomShape;
  for (let i = 0; i < maxShapes; i++) {
    randomShape = Math.floor(random(2));
    switch (randomShape) {
      case 0:
        allTheShapes[i] = new Square();
        break;
      case 1:
        allTheShapes[i] = new Circle();
        break;
    }
  }
}

function draw() {
  background(Colors.bg);

  for (var i = 0; i < allTheShapes.length; i++) {
    allTheShapes[i].move();
    allTheShapes[i].collision();
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
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.width = random(width * 0.025, width * 0.035);
    this.height = this.width;
    this.shapeType = Math.floor(random(3));
  }

  render() {
    noStroke();
    switch (this.shapeType) {
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

  collision() {
    if(this.x < 0 || (this.x + this.width > width))
      this.speedX *= -1
    if(this.y < 0 || (this.y + this.height > height))
      this.speedY *= -1
  }
}


class Circle extends Shape {
  constructor(){
    super();
    this.size = random(width * 0.012, width * 0.041);
    this.shapeType = Math.floor(random(5));
  }

  render() {
    noStroke();
    ellipseMode(CENTER);
    switch (this.shapeType) {
      case 0:
        //Circle 1
        fill(Colors.coral100);
        arc(this.x, this.y, this.size, this.size, HALF_PI, -HALF_PI);
        fill(Colors.coral200);
        arc(this.x, this.y, this.size, this.size, -HALF_PI, HALF_PI);
        break;
      case 1:
        //Circle 2
        fill(Colors.coral200);
        arc(this.x, this.y, this.size, this.size, HALF_PI, -HALF_PI);
        fill(Colors.purple300);
        arc(this.x, this.y, this.size, this.size, -HALF_PI, HALF_PI);
        break;
      case 2:
        //Circle 3
        fill(Colors.purple300);
        ellipse(this.x, this.y, this.size, this.size);
        fill(Colors.coral200);
        ellipse(this.x, this.y, this.size * 0.65, this.size * 0.65);
        fill(Colors.coral100);
        ellipse(this.x, this.y, this.size * 0.34, this.size * 0.34);
        break;
      case 3:
        //Circle 4
        fill(Colors.purple300);
        ellipse(this.x, this.y, this.size, this.size);
        fill(Colors.purple100);
        ellipse(this.x, this.y, this.size * 0.34, this.size * 0.34);
        break;
      case 4:
        //Circle 5
        fill(Colors.coral200);
        ellipse(this.x, this.y, this.size, this.size);
        fill(Colors.white);
        ellipse(this.x, this.y, this.size * 0.34, this.size * 0.34);
        break;
    }
  }

  collision() {
    if(this.x < (this.size/2) || (this.x + this.size/2 > width))
      this.speedX *= -1
    if(this.y < (this.size/2) || (this.y + this.size/2 > height))
      this.speedY *= -1
  }

}
