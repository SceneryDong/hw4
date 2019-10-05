function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);

  for (var x = 40; x < width-40; x = x + 10) {
    line(x, height/2, mouseX, mouseY);
  }
}
