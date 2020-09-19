
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var line1,line2,line3;
var paper;

// function preload()
// {
	
// }

function setup() {
	var canvas = createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(0,650,1800,50);
	paper = new Paper(200,640);
	// paper = new Paper()


	line1 = new Line(1700,300,20,70);

	
}


function draw() {
	Engine.update(engine);
	
	//   rectMode(CENTER);
	background(0);
	
	fill("red");
	
	paper.display();
	fill ("green");
	keyPressedUp();
	ground.display();
	line1.display();
}

function keyPressedUp(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-70}); 
	}

}



