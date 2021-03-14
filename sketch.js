const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var box1, box2, box3, box4, box5, box6;

var launcherObj;

function setup(){
    createCanvas(1300,600);

    engine=Engine.create();
    world=engine.world;

    ground = new Ground(800,500,350,20);

    block1 = new Block(690,448,50,80);
    block2 = new Block(745,448,50,80);
    block3 = new Block(800,448,50,80);
    block4 = new Block(855,448,50,80);
    block5 = new Block(910,448,50,80);
    block6 = new Block(745,282,50,80);
    block7 = new Block(800,282,50,80);
    block8 = new Block(855,282,50,80);
    block9 = new Block(800,118,50,80);

    box1 = new Box(715,365,50,80);
    box2 = new Box(770,365,50,80);
    box3 = new Box(825,365,50,80);
    box4 = new Box(880,365,50,80);
    box5 = new Box(772,200,50,80);
    box6 = new Box(828,200,50,80);

    launcherObj = new Polygon(100,300,30);
    slingShot = new SlingShot(launcherObj.body,{x:150,y:300});

}
function draw(){
    background(220);
    Engine.update(engine);
    
    textSize(30);
    text ("Press Space for a second chance",120,100)

    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    launcherObj.display();
    slingShot.display();

}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(launcherObj.body, {x:235,y:420});
    slingShot.attach(launcherObj.body);
  }
}
function mouseDragged(){
    Matter.Body.setPosition(launcherObj.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }