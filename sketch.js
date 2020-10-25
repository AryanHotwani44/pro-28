const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("pic/background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,350,350);
    pig1 = new Pig(810, 200);



    pig3 = new Pig(750, 200);
    pig4 = new Pig(710, 200);
    pig5 = new Pig(610, 245);

    bird = new Bird(100,100);

    log6 = new Log(30,180,200,200);
    slingshot = new SlingShot(bird.body,{x: 200,y: 100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    ground.display();
    pig1.display();
    log6.display();

    pig3.display();
    pig4.display();
    pig5.display();

    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});


}

function mouseReleased(){

slingshot.fly();

}