class Shape {
  constructor(Shape) {
    this.Shape = Shape;
  }
  displayDetails() {
    return this.Shape;
  }
}

class Circle extends Shape {
  constructor(Shape, radius) {
    super(Shape);
    this.ra = radius;
  }
  calculateArea() {
    let areacir = Math.PI * this.ra * this.ra;
    return areacir;
  }
}


class Rectangle extends Shape {
  constructor(Shape, length, breadth) {
    super(Shape);
    this.l = length;
    this.b = breadth;
  }
  calculateArea() {
    let arearec = this.l * this.b;
    return arearec;
  }
}

class Square extends Shape {
  constructor(Shape, side) {
    super(Shape);
    this.side = side;
  }
  calculateArea() {
    let areasqr = this.side * this.side;
    return areasqr;
  }
}

class Triangle extends Shape {
  constructor(Shape, base, height) {
    super(Shape);
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    let areatri = 1 / 2 * this.base * this.height;
    return areatri;
  }
}

let cir1 = new Circle('circle', 2)
let areacir = cir1.calculateArea()
console.log(cir1.Shape + ':' + areacir)

let rec1 = new Rectangle('rectangle', 2, 3)
let arearec = rec1.calculateArea()
console.log(rec1.Shape + ':' + arearec)

let sqr1 = new Square('square', 2)
let areasqr = sqr1.calculateArea()
console.log(sqr1.Shape + ':' + areasqr)

let tri1 = new Triangle('triangle', 2, 3)
let areatri = tri1.calculateArea()
console.log(tri1.Shape + ':' + areatri)

function cumulativeArea(arr){
  let tarea=0;
  for(let i=0;i<arr.length;i++){
    tarea += arr[i];
    
  }
  console.log(tarea)
  
}

let arr=[]
arr.push(areacir)
arr.push(arearec)
arr.push(areasqr)
arr.push(areatri)

cumulativeArea(arr)



