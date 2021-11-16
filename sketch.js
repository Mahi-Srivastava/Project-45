var bg,bgimg,player,shooterimg,shootershooting
var zombie,zombieimg
var heart1,heart2,heart3
var heart1img,heart2img,heart3img
var zombiegroup
var life = 3
var bullets = 70
var gameState = "fight"
var lose,winning,explosionsound
var bulletgroup,zombiegroup
var score = 0

function preload(){
  bgimg = loadImage("assets/bg.jpeg")
  heart1img = loadImage("assets/heart_1.png")
  heart2img = loadImage("assets/heart_2.png")
  heart3img = loadImage("assets/heart_3.png")
  zombieimg = loadImage("assets/zombie.png")
  shooterimg = loadImage("assets/shooter_2.png")
  shootershootingimg = loadImage("assets/shooter_3.png")
  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionsound = loadSound("assets/explosion.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(displayWidth/2 -20,displayHeight/2 -40,20,20)
  bg.addImage(bgimg)
  bg.scale = 1.1
  
  player = createSprite(displayWidth-1350,displayHeight-300,50,50)
  player.addImage(shooterimg)
  player.scale = 0.5

  heart1 = createSprite(displayWidth-150,40,20,20)
  heart1.addImage(heart1img)
  heart1.scale = 0.2
  heart1.visible = true

  heart2 = createSprite(displayWidth-140,40,20,20)
  heart2.addImage(heart2img)
  heart2.scale = 0.2
  heart2.visible = true

  heart3 = createSprite(displayWidth-120,40,20,20)
  heart3.addImage(heart3img)
  heart3.scale = 0.2

  zombiegroup = new Group()
  bulletgroup = new Group()
}

function draw(){
 background(0)
if(gameState === "fight"){
if(life === 3){
  heart3.visible = true
  heart2.visible = false
  heart1.visible = false
}
if(life === 2){
  heart3.visible = false
  heart2.visible = true
  heart1.visible = false
}
if(life === 1){
  heart3.visible = false
  heart2.visible = false
  heart1.visible = true
}
if(life === 0){
  gameState = "lost"
}
if(score === 100){
  gameState = "won"
  winningsound.play()
}
if(keyDown("UP_ARROW")|| touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")|| touches.length>0){
  player.y = player.y+30
}
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityX = 20
  bulletgroup.add(bullet)
  bullets = bullets-1
  player.addImage(shootershootingimg)
  explosionsound.play()
}
if(keyWentUp("space")){
  player.addImage(shooterimg)
}
enemy()
}

  
  drawSprites()
}
function enemy(){
  if(frameCount%80 === 0){
    zombie = createSprite(random(500,1100),random(100,500),40,40)
    zombie.addImage(zombieimg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombiegroup.add(zombie)
  }
}

  