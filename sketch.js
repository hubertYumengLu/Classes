let ball0;
let ball1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = new Ball(random(width), random(height))
  ball1 = new Ball(random(width), random(height))
}
function draw() {
  background(200);
  ball0.update()
  ball0.draw()
  ball1.update()
  ball1.draw()
}
class Ball {
  constructor(x, y, dy) {
    this.x = x;
    this.y = y
    this.dy = 0
    this.diameter = random(0, 100)
  }
  // containsPoint(x, y) {}
  // containsMouse() {}
  update() {
    // changes the properties
    this.x -= this.dy;
    this.dy += 0.25;
  }
  
  draw() {
    // renders the object
  
    circle(this.x, this.y, this.diameter)
    if (this.x <= 0) {
      this.dy *= -0.95;
    }
    
  }
}