// Base class Shape
class Shape {
  constructor() {}

  // Method to calculate area (default implementation returns 0)
  calculateArea() {
    return 0;
  }

  // Method to calculate perimeter (default implementation returns 0)
  calculatePerimeter() {
    return 0;
  }
}

// Subclass Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Override method to calculate area for a circle
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Override method to calculate perimeter (circumference) for a circle
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Subclass Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Override method to calculate area for a rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Override method to calculate perimeter for a rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Subclass Triangle
class Triangle extends Shape {
  constructor(base, height, side1, side2, side3) {
    super();
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  // Override method to calculate area for a triangle
  calculateArea() {
    return (this.base * this.height) / 2;
  }

  // Override method to calculate perimeter for a triangle
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Example usage:
const circle = new Circle(5);
console.log(
  `Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`
);

const rectangle = new Rectangle(4, 6);
console.log(
  `Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`
);

const triangle = new Triangle(3, 4, 5, 4, 5);
console.log(
  `Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`
);
