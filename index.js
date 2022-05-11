// Add your Circle class here
class Circle {
    constructor(radius) {
    this.radius = radius;
    let pi = Math.PI;
}
get area() {
    return Math.PI * (this.radius * this.radius);
  }
  set diameter(newdiameter) {
    this.radius = newdiameter / 2;
  }
  set circumference(newcircumference) {
    this.radius / Math.PI / 2;
  }
  set area(newarea) {
    this.radius = newarea / Math.PI / Math.sqrt(this.radius);
  }
}

circle = new Circle(5);
Circle.radius();
Circle.circumference();
Circle.diameter();