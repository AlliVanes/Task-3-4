// P_2_0_01
 //
 // Generative Gestaltung, ISBN: 978-3-87439-759-9
 // First Edition, Hermann Schmidt, Mainz, 2009
 // Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
 // Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
 //
 // http://www.generative-gestaltung.de
 //
 // Licensed under the Apache License, Version 2.0 (the "License");
 // you may not use this file except in compliance with the License.
 // You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 // Unless required by applicable law or agreed to in writing, software
 // distributed under the License is distributed on an "AS IS" BASIS,
 // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 // See the License for the specific language governing permissions and
 // limitations under the License.
 /**
 * drawing a filled circle with lines.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 *
 * KEYS
 * s                   : save png
 */
function setup(){
 createCanvas(780, 780);
 }
 //Swapped all of the 'x's and 'y's
function draw(){
 strokeCap(SQUARE);
 smooth();
 fill(240, 80, 100);
 //edited background
 background(240,200,85);
 push();
 //edited position
 translate(width/1.5,height/2.2);
 //edited all numbers and given more strokes in the circle
 var circleResolution = int(map(mouseX, 0,width, 1,200));
 var radius = float(mouseY-height/10 + 0.8);
 var angle = float(TWO_PI/circleResolution);
 
 //Looks more like an optical illusion now I've increased this to 300
 strokeWeight(mouseX/300);
 beginShape();
 for (var i=0; i<=circleResolution; i++){
 var y = float(cos(angle*i) * radius);
 var x = float(sin(angle*i) * radius);
 line(0, 0, y, x);
 
 // vertex(x, y);
 }
 endShape();
 pop();
 }
function keyTyped() {
 if (key=='s' || key=='S') save("P_2_0_01.png");
 }