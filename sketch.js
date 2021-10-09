const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1,base2,player,compPlayer,base1IMG,base2IMG,playerIMG;
function preload(){
 base1IMG = loadImage("base1.png");
 base2IMG = loadImage("base2.png")
 playerIMG = loadImage("player.png")





}
function setup() {
  canvas = createCanvas(1000,1000);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
base1=Bodies.rectangle(300,300,20,20);


base2=Bodies.rectangle(700,300,20,20);

 
player=Bodies.rectangle(300,250,20,20);


compPlayer=Bodies.rectangle(700,250,20,20);

 
World.add(world,base1);
World.add(world,base2);
World.add(world,player);
World.add(world,compPlayer);


}

function draw() {

  background(180);

  Engine.update(engine);

imageMode (CENTER);
  image(base1IMG,300,300,200,200);
  image(base2IMG,700,300,200,200);
  image(playerIMG,300,150,100,150);
  image(playerIMG,700,150,100,150);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
