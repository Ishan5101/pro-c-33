const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var backgroundImg;
var snow4,snow5;

function preload(){
  backgroundImg=loadImage("snow3.jpg");
}
function setup() {
  var canvas = createCanvas(1000,900);
  engine = Engine.create();
  world  = engine.world;


 
}

function draw() {
  background( backgroundImg);

  drawSprites();
}