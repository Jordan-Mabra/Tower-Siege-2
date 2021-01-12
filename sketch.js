
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,590,800,30);

	ground1 = new Ground(500,350,200,20);

	box8 = new Box(420,300);
	box9 = new Box(450,300);
	box10 = new Box(480,300);
	box11 = new Box(510,300);
	box12 = new Box(540,300);
	

    box13 = new Box(450,260);
	box14 = new Box(480,260);
	box15 = new Box(510,260);
	
	box16 = new Box(480,220);

	polygon = new Polygon(50,200,20);

	slingshot = new Slingshot(polygon.body,{x:150,y:350});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground.display();
  ground1.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  polygon.display();
  slingshot.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        value = value +5;
    if (value > 255){
        value = 0;
    }
        //}
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}


function mousePressed(){
   if (value === 0){
       value = 225;
   } else {
       value = 0;
 }
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }
}