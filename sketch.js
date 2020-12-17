const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var ground;
var polygon, polygon_img;
var sShot;
var distance;
var score=0;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(290,275,40,50,"blue");
    box2 = new Box(330,275,40,50,"blue");
    box3 = new Box(370,275,40,50,"blue");
    box4 = new Box(410,275,40,50,"blue");
    box5 = new Box(450,275,40,50,"blue");
    box6 = new Box(490,275,40,50,"blue");
    box7 = new Box(530,275,40,50,"blue");
    //row 2
    box8 = new Box(330,225,40,50,"pink");
    box9 = new Box(370,225,40,50,"pink");
    box10 = new Box(410,225,40,50,"pink");
    box11 = new Box(450,225,40,50,"pink");
    box12 = new Box(490,225,40,50,"pink");
    //row 3
    box13 = new Box(370,175,40,50,"teal");
    box14 = new Box(410,175,40,50,"teal");
    box15 = new Box(450,175,40,50,"teal");
    //last box
    box16 = new Box(410,125,40,50,"grey");

    ground = new Ground(410,300,320,10);

    polygon = new Polygon(100,200,20);
   
    sShot = new slingShot(polygon.body,{x:100,y:200});
    var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 400,
		  wireframes: false
		}
	  });

	Engine.run(engine);


}

function draw(){
background("black");

textSize(24);
text("SCORE :"+score,750,40);

box1.display();
box2.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
ground.display();

drawSprites();
polygon.display();
sShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sShot.fly();

}

function keyPressed(){
  if(keyCode === 32){
  sShot.attach(this.polygon);
  }
}