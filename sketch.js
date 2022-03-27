function setup() {
  createCanvas(800,400);
  Player= createSprite(100, 200, 30, 30);
  obstacle1= createSprite(200,0,10,500)
  obstacle2= createSprite(400,400,10,500)
  obstacle3= createSprite(350,75,100,10)
  obstacle4= createSprite(600,0,10,600)

  
  
}

function draw() {
if(keyDown("right")){
  Player.x= Player.x+5
}
if(keyDown("left")){
  Player.x= Player.x-5
}
if(keyDown("up")){
  Player.y= Player.y-5
}
if(keyDown("down")){
  Player.y= Player.y+5
}
  
  
  background(100,225,55);  
  drawSprites();
}