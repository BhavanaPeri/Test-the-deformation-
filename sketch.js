var car,speed,weight,wall;

function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 70, 35);
  wall=createSprite(1500,200,90,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX= speed;
  }

function draw() {
  background(0,0,0);
  textSize (20);
  fill("cyan");
  text("weight="+weight,600,100);
  text("speed="+speed,200,100);
  
  if(wall.x-car.x <=car.width/2+wall.width/2) {
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
   
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>80){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<=80){
      car.shapeColor=color(0,255,0);
    }
    text("deformation="+deformation,1250,350);
  }
  
  drawSprites();
}