
var car, wall
var speed,weight
var deformation


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  weight = random (400,1500);
  speed = random (55,90);
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255); 
  if (car.x == 1445 ){
    textSize(24)
    text(deformation,1300,350)
  }
  if( isTouching(car,wall) && deformation < 100  ){
   car.shapeColor = "green"
    car.velocityX = 0
  }
  if( isTouching(car,wall) && deformation > 100 && deformation <180){
    car.shapeColor = "yellow"
    car.velocityX = 0
  }
  if( isTouching(car,wall) && deformation > 180 ){
    car.shapeColor = "red"
    car.velocityX = 0
  }
  drawSprites();
}