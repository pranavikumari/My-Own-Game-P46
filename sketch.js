var bg, bgImg;
var helicopter, helicopterImg, helicopter2, helicopter2Img;
var tanker, tankerImg;

function preload(){
  bgImg= loadImage("Images/forestBg.jpg");
  helicopterImg= loadAnimation("Images/helicopter1.png", "Images/helicopter2.png","Images/helicopter3.png");
  tankerImg= loadImage("Images/tanker.png")
}

function setup() {
  createCanvas(1200,700);

  bg=createSprite(0,300,1500,1000);
  bg.addImage(bgImg);
  bg.scale=1;
  bg.velocityX=-3;

  helicopter= createSprite(200,120);
  helicopter.addAnimation("helicopters", helicopterImg);
  helicopter.scale=0.6;

  tanker=createSprite(900,517);
  tanker.addImage(tankerImg);
  tanker.scale=0.5;
  

}

function draw() {
  background("gray");
  
  if(bg.x<500){
    bg.x=bg.width/2;
  }

  if(keyDown(UP_ARROW)){
    helicopter.y=helicopter.y-3;
  }

  if(keyDown(DOWN_ARROW)){
    helicopter.y= helicopter.y+3;
  }
  
  if(keyDown(RIGHT_ARROW)){
    helicopter.x=helicopter.x+3;
  }

  if(keyDown(LEFT_ARROW)){
    helicopter.x=helicopter.x-3;
  }
  


  drawSprites();
}