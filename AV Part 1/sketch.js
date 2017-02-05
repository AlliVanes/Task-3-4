/* I wanted to merge this with my other
sketch (Part 2) to get more interactivity,
but I couldn't get my head around why the
code didn't work when I pasted it into
this sketch. So in the end I tried to
create 2 different responses to this brief
that still worked on their own. */

function setup(){
 createCanvas(1920, 1080);
 background (5, 0, 10);
}
function drawPlanet(x,y,radius) {
  if (mouseX>960){
  ellipse(x,y,radius,radius);
  } else {
    rect(x,y,radius, radius);
  }
  rectMode(CENTER);
  fill(random(0),random(255),random(255));
  strokeWeight(mouseY/90);
  stroke(random(0),random(255),random(255));
  smooth();
  strokeJoin(ROUND);
}
var oldX = 0;
var oldY = 0;

function mouseClicked(){
  drawPlanet(mouseX,mouseY, mouseY/10);
 
 //Connects circle to coordinates.
  line(960,1080, mouseX, mouseY);
 
 //Connects previous circle with a line.
  line(oldX, oldY, mouseX, mouseY);
  oldX = mouseX;
  oldY = mouseY;
}
 //Enables the image to be saved as a .png file.
function keyTyped() {
 if (key=='s' || key=='S') save("Alli.png");
}



/*
function draw() {
g=map(mouseX,displayWidth,displayHeight,0,255);
b=map(mouseY,displayWidth,displayHeight,255,0);
background(0,g,b);
}
*/

/*
function draw(){
 
  var mouse = new p5.Vector(mouseX, mouseY);
  var difference = mouse.sub(position);
  difference.normalize();
  position.add(difference);
  //difference.mult(0.1);
  
  ellipse(position.x, position.y, 10, 10);
}
*/

























//function sayWord(word) {
 // console.log(word);
//}
//sayWord("hello");