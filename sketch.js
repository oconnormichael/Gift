var PLAY=1;
var END=0;
var gameState=1;
var phil,philImage,back,backImage,sword,swordImage,heart,heartImage,score,time;
function preload(){
  philImage=loadImage("phil.png");
  backImage=loadImage("back.png");
  swordImage=loadImage("sword.png");
  heartImage=loadImage("heart.png")
}
function setup() {
  createCanvas(1000, 600);
  
   
  back=createSprite(500,300,1000,600);
  back.addImage(backImage);
   
  phil=createSprite(200,200,10,10);
  phil.addImage(philImage)
  phil.scale=0.4;
  phil.debug=false;
  phil.setCollider("rectangle",0,3,240,300);
  
  heart3Group=createGroup();
  swordGroup=createGroup();
  heartGroup=createGroup();
  heart2Group=createGroup()
  bar1=createSprite(-10,300,10,1000);
  bar2=createSprite(1010,300,10,1000);
  bar3=createSprite(500,610,1000,10);
  bar4=createSprite(500,-10,1000,10);
  time=createSprite(10,100,10,10);
  time.visible=false;
  score=0;
}

function draw() {
  background(220);
  if(gameState===PLAY){
     if(swordGroup.isTouching(phil)){
       heart2Group.destroyEach()
       heart3Group.destroyEach()
       heartGroup.destroyEach()
      swordGroup.destroyEach()
       
      gameState="end";
      
    }
if(phil.isTouching(heartGroup)){
  heartGroup.destroyEach();
  score=score+1;
}
    if(phil.isTouching(heart2Group)){
  heart2Group.destroyEach();
  score=score+1;
}
    if(phil.isTouching(heart3Group)){
 
  score=score+1;
}
    if(keyDown("l"&&"o"&&"v"&&"e")){
      time.velocityX=-10
      swordGroup.destroyEach();
    }
  if(keyDown("a")){
    phil.x=phil.x-5;
  }
  if(keyDown("w")){
    phil.y=phil.y-5;
  }
  if(keyDown("d")){
    phil.x=phil.x+5;
  }
  if(keyDown("s")){
    phil.y=phil.y+5;
 }
   phil.visible=true;
       back.visible=true;
    Heart();
   Sword();
    Heart2();
    Heart3();
    }
    
  //phil.x=World.mouseX
  //phil.y=World.mouseY
  phil.collide(bar1);
  phil.collide(bar2);
  phil.collide(bar3);
  phil.collide(bar4);
  if(gameState==="end"){
   heartGroup.destroyEach()
    heart2Group.destroyEach()
    heart3Group.destroyEach()
      textSize(100)
      fill("red")
      text("GAME OVER",200,300);
      fill("blue")
      textSize(40)
      text("Press Space To Play Again",260,400)
   back.visible=false;
    phil.visible=false;
    if(keyDown("space")){
      gameState=PLAY;
      score=0;
    }
    }
 
  drawSprites();
  textSize(20)
  fill("green")
  text("Score:"+score,900,50)
}

function Sword(){

  if(World.frameCount%300===0){
   var sword
   sword=createSprite(1080,300,10,10);
   sword.addImage(swordImage);
   sword.scale=0.3;
   sword.lifetime=80;
   sword.y=Math.round(random(10,590));
   sword.velocityX=-15;
   
   swordGroup.add(sword);
 }
  
  
  
  
}
function Heart(){
  if(World.frameCount%190===0){
    var heart
    heart=createSprite(1080,300,10,10);
    heart.addImage(heartImage);
    heart.scale=0.3;
    heart.y=Math.round(random(10,590));
    heart.velocityX=-12;
    heart.lifetime=100;
    heartGroup.add(heart);
  }
}
function Heart2(){
  if(World.frameCount%180===0){
    var heart2
    heart2=createSprite(1080,300,10,10);
    heart2.addImage(heartImage);
    heart2.scale=0.3;
    heart2.y=Math.round(random(10,590));
    heart2.velocityX=-12;
    heart2.lifetime=100;
    heart2Group.add(heart2);
  }
}
function Heart3(){
  if(time.x<0){
  if(World.frameCount%1===0){
    var heart3
    heart3=createSprite(1080,300,10,10);
    heart3.addImage(heartImage);
    heart3.scale=0.3;
    heart3.y=Math.round(random(10,590));
    heart3.velocityX=-12;
    heart3.lifetime=100;
    heart3Group.add(heart3);
  }
}}