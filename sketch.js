const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var world,engine,ground;
var particles = [];
var division1,division2,division3;
var divitionHight = 300;
var form,game,player;
var gameState = 0;

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  game= new Game();
  game.start();
}
function draw() {
  background(255); 

  Engine.update(engine);
  ground.display();
  if(gameState === 1) {
    game.play();
    console.log(gameState);
  }
  drawSprites();

}