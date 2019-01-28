function setup() {
  createCanvas(800, 600);
}

function draw() {
  var h = hour();
  var m = minute();
  var s = second()
  background(102);
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 150, h); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 100, m/10); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 50, s/10); 
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
