const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground1, ground2, Mground;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18;
var box19, box20, box21, box22, box23, box24;
var box25, box26, box27;
var box28, box29, box30, box31, box32, box33;
var box34, box35, box36;
var hexagon, slingShot;
var score = 0;
var backgroundImg;
var gameState = "onsling";
var bg = "Sprites/bg.jpg";

function preload() {
getBackgroundImg();
backgroundImg = loadImage("Sprites/bg.jpg");
}

function setup() {
createCanvas(1300,400);
engine = Engine.create();
world = engine.world;

createSprite(400, 200, 50, 50);

ground = new Ground(400,height - 100,200,20);
ground1 = new Ground(650,height - 150,200,20);
ground2 = new Ground(910, height - 200,200,20);
Mground = new Ground(400,height - 35,2000,20);

box1 = new Box(330, 235, 30, 40);
box2 = new Box(360, 235, 30, 40);
box3 = new Box(390, 235, 30, 40);
box4 = new Box(420, 235, 30, 40);
box5 = new Box(450, 235, 30, 40);
box6 = new Box(360, 195, 30, 40);
box7 = new Box(390, 195, 30, 40);
box8 = new Box(420, 195, 30, 40);

box9 = new Box(390, 185, 30, 40);

box10 = new Box(590, 185, 30, 40);
box11 = new Box(620, 185, 30, 40);
box12 = new Box(650, 185, 30, 40);
box13 = new Box(680, 185, 30, 40);
box14 = new Box(710, 185, 30, 40);

box15 = new Box(620, 135, 30, 40);
box16 = new Box(650, 135, 30, 40);
box17 = new Box(680, 135, 30, 40);

box18 = new Box(650, 175, 30, 40);

box19 = new Box(910, 130, 30, 40);
box20 = new Box(880, 130, 30, 40);
box21 = new Box(850, 130, 30, 40);
box22 = new Box(940, 130, 30, 40);
box23 = new Box(970, 130, 30, 40);

box24 = new Box(910, 90, 30, 40);
box25 = new Box(880, 90, 30, 40);
box26 = new Box(940, 90, 30, 40);

box27 = new Box(910, 50, 30, 40);



hexagon = new Polygon(100, 280, 40);

slingShot = new SlingShot(hexagon.body, {x: 150, y: 150});
}

function draw() {
if(backgroundImg) {
background(backgroundImg);
}
noStroke();
textSize(20);
fill("white");
text("score:" + score, 50, 40);

textSize(17);
fill("#ddd");
text("Want another chance?? Press space key!!!       You get 20 points to knockdown every box.   score 540 points to win. "
, 200, 395);

Engine.update(engine);

stroke(255);

box1.score();
box1.display();
box2.score();
box2.display();
box3.score();
box3.display();
box4.score();
box4.display();
box5.score();
box5.display();
box6.score();
box6.display();
box7.score();
box7.display();
box8.score();
box8.display();
box9.score();
box9.display();
box10.score();
box10.display();
box11.score();
box11.display();
box12.score();
box12.display();
box13.score();
box13.display();
box14.score();
box14.display();
box15.score();
box15.display();
box16.score();
box16.display();
box17.score();
box17.display();
box18.score();
box18.display();

box19.display();
box19.score();
box20.display();
box20.score();
box21.display();
box21.score();
box22.display();
box22.score();
box23.display();
box23.score();
box24.display();
box24.score();
box25.display();
box25.score();
box26.display();
box26.score();
box27.display();
box27.score();

ground.display();
ground2.display();
ground1.display()
Mground.display();

hexagon.display();
slingShot.display();

if(score == 540){
  textSize(50);
  fill("yellow");
  text("YOU WIN!!!", 300, 200);
}
}

function mouseDragged(){
if(gameState!=="launched"){
Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased() {
slingShot.fly();
gameState = "launched";
}

function keyPressed() {
if(keyCode === 32) {
slingShot.attach(hexagon.body);
gameState = "onsling";
}
}

async function getBackgroundImg() {
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var date = responseJSON.datetime;
var hour = date.slice(11, 13);
if(hour>=06 && hour<=19){
bg = "Sprites/bg.jpg"
} else {
bg = "Sprites/bg1.jpg"
}
backgroundImg = loadImage(bg);
console.log(backgroundImg);

}