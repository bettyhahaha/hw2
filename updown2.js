function setup() {
  createCanvas(400, 400);
}

var ballY = 30;
var ballSpeed = 3;

var ballX2 = 370;
var ballSpeed2 = 5;

function draw() {
  background(220);

  fill(255, 0, 0,);
  ellipse(mouseY, ballY, 30);
  
  fill(0, 0, 255);
  ellipse(mouseX, ballX2, 30);

  ballY = ballY + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballY <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }

}
