var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb,bombImg;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
bomb = createSprite ( 200,100);
  bomb.addImage("Krilin",bombImg);
  bomb.scale = 0.1;
bomb.velocityX = 3;
leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
leftBoundary.invisible = false;
// leftBoundary.visible = true;
leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.invisible = true;
// leftBoundary.visible = false;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  boy.y = World.mouseY;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  bomb.bounceOff (rightBoundary);
  bomb.bounceOff(leftBoundary);
  //código para reiniciar el fondo

  /*if(path.y > 400 ){
    path.y = height/2;
  }*/
if(path.y > 400){
path.y = height/2;
}
  /*if(path.y > 400 ){
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
