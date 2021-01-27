const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;
var ground,ball1;

function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world  =  engine.world;
  var ground_option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_option);
  World.add(world,ground);
  var ball_option = {
    restitution: 1.5
  }
  
  ball1 = Bodies.rectangle(200,100,20,20,ball_option);
  ball1.shapeColor = "red";
  World.add(world,ball1);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball1.position.x,ball1.position.y,20,20);
}
