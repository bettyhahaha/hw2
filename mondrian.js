function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);

  
  //yellow square
  fill(255, 255, 0);
  rect(0,0,132,200);

  //red square
  fill(255,0,0);
  rect(132,0,268,320);
  
  //blue square
  fill(0,0,255);
  rect(0,320,132,80);

  
  strokeWeight(25);
  line(0,0,400,0);
  line(0,0,0,400);
  line(400,0,400,400);
  line(0,400,400,400);
 
  strokeWeight(12.5);
  line(320,320,320,400);
  
  
}
