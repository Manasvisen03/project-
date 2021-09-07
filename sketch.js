var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  var select_Sprites = Math.round(random(1,3));
  if(frameCount % 80 == 0){
    if(select_Sprites == 1){
      createApples();
    }
    else if(select_Sprites == 2){
       createApples();
    
  }
    drawSprites();
  }
  

  function createApples(){
apple=createSprite(random(50,380),40,10,10);
apple.addImage(appleImg);
apple.scale=.2;
apple.velocityY=5;
apple.lifetime=150;
  }

  var select_Sprites = Math.round(random(1,3));
  if(frameCount % 100 == 0){
    if(select_Sprites == 1){
      createLeaves();
    }
    else if(select_Sprites == 5){
      createLeaves();
    }
    drawSprites();
  }

function createLeaves (){
leaf=createSprite(random(50,350),40,10,10)
leaf.addImage(leafImg);
leaf.scale=.2;
leaf.velocityY=5;
leaf.lifetime=150;



}


  drawSprites();
}


















