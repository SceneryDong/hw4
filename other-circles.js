function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();
  
  
  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 10) {
    beginShape();
vertex(x[i]-(1+ (x.length - i)), y[i]-(1+ (x.length - i)));
vertex(x[i], y[i]-(1+ (x.length - i)));
vertex(x[i], y[i]);
vertex(x[i]+(1+ (x.length - i)), y[i]);
vertex(x[i]+(1+ (x.length - i)), y[i]+(1+ (x.length - i)));
vertex(x[i]-(1+ (x.length - i)), y[i]+(1+ (x.length - i)));
endShape(CLOSE);
   }
  

  x = x.slice(-50); // remove all but the last 50 x values
  y = y.slice(-50); // remove all but the last 50 y values
}
