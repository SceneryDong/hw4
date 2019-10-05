function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
//   var x = random(width);
//   var y = random(height);

//   stroke(x, y, 100);
//   point(x, y);
  for (var x =random(width);x<=400;x=x+4){
    for (var y=random(height);y<=400;y=y+4){
      stroke (x,y,100)
      point (x,y)}
  }
}
