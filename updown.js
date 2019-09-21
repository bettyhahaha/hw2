function setup() {
  createCanvas(400, 400);
}

var ballX = 23.6;
var ballSpeed = 5;

var ballX2 = 265;
var ballSpeed2 = 19;

function draw() {
  background(220);

  fill(255, 255, 0);
  ellipse(ballX2, ballX, 150);
  
  fill(165, 0, 255);
  ellipse(ballX, ballX2, 57);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX >= 400) {
    ballSpeed = -8;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }

}
