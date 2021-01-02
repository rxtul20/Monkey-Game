var monkey , monkey_running
var banana,bananaImage, obstacle, obstacleImage
var banannaGroup, obstacleGroup
var score = 0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(60,290,30,30)
  monkey.addAnimation('Running',monkey_running)
  monkey.scale = 0.2
  ground = createSprite(400,400,800,100)
  ground.velocityX = -1
  obstacleGroup= new Group()
  banannaGroup = new Group()
}


function draw() {
  background('white')
  score = Math.round(frameRate()/6) + score
  text(score,200,50)
  if(ground.x < 0){
    ground.x = 400
    ground.y = 400
  }
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  if(keyDown('space') && monkey.y>280
){
  monkey.velocityY = -10
  
  }
  console.log(monkey.y)
  food()
  obstacles();
  drawSprites()
}

function food(){
  if(frameCount %80 === 0){
    var bananna = createSprite(random(120,200),random(120,200),20,20)
    bananna.velocityX = -6
    bananna.addImage(bananaImage)
    bananna.scale = 0.1
    bananna.lifetime = 80
    banannaGroup.add(bananna)
  }
}
function obstacles(){
  if(frameCount %300 === 0){
    var obstacle = createSprite(400,330,30,30)
    obstacle.velocityX = -6
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.lifetime = 80
    obstacleGroup.add(obstacle)
  }
}