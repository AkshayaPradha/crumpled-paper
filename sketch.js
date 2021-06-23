
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paper;
var world;



function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(800,670);
    paper = new Paper(100,600,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  paper.display();
  dustbinObj.display();


}
function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.Body,paper.Body.position,{x:1000,y:-1300});
	
	}

}

