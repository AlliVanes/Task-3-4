/* I wanted to merge this with my other
sketch (Part 1) to get more interactivity,
but I couldn't get my head around why the
code didn't work when I pasted it into
this sketch. So in the end I tried to
create 2 different responses to this brief
that still worked on their own. */

function setup(){
 createCanvas(1920, 1080);
}
var x = 0
var y = 0
var r=255;
var b=255;
var speed = 3
var position = new p5.Vector(10,10);
function draw() {
  background(r,0,b);
r=map(mouseX,1920,1080,0,255);
b=map(mouseY,1920,1080,255,0);
  noFill();
  if(mouseX > 0 && mouseX < 384 /*&& mouseY > 0 && mouse Y < 216*/) {
  fill(255,0,random(200));
  rect(0,0,384,1080);
  } else if (mouseX > 384 && mouseX < 768){
  fill(200,0,random(255));
  rect(384,0,384,1080);
  } else if (mouseX > 768 && mouseX < 1152){
  fill(220,50,random(100));
  rect(768,0,384,1080);
  } else if (mouseX > 1152 && mouseX < 1536){
  fill(50,0,random(255));
  rect(1152,0,384,1080);
  } else {
  fill(50,0,random(255));
  rect(1536,0,384,1080);
  }
  noStroke;
  smooth();
  fill(70,50,random(200));
  ellipse(x, 108,216,216);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;
  
  var mouse = new p5.Vector(mouseX, mouseY);
  var difference = mouse.sub(position);
  difference.normalize();
  position.add(difference);
  //difference.mult(0.1);
  
  ellipse(position.x, position.y, 384, 384);
  
}
//???
for (var y = 0; y <= height; y=y+50) {
  noStroke;
  smooth();
  fill(70,50,random(200));
  ellipse(x, 108,216,216);
  if (y > height || x < 0) {
    speed = speed * -1;
  }
}