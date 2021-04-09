
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,ball1;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball1=new ball(320,600,40)
    
	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ball1.display();

}
function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paperObject.body,paper.paperObject.body.position,{x:130,y:-145})

	}
}
