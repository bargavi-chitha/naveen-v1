const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Events = Matter.Events;
var world,engine,ground;
var particles;
var division1,division2,division3;
var divitionHight = 300;
var form,game,player;
var gameState = 0;
var score,mConstraint;

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  score = 0;
  game= new Game();
  game.start();
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = { mouse: canvasmouse } 
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}
function draw() {
  background(255); 

  Engine.update(engine);
  ground.display();
  if(gameState === 1) {
    game.play();
    if(particles!=null){
    particles.display();
    }
    console.log(gameState);
  }
  drawSprites();
  textSize(20);
  fill("dark green");
  text("SCORE:"+score,200,200);
}
function mouseClicked(){
  particles= new Particle(mouseX,mouseY,50);
  console.log(color);
  }