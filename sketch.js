const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box5;
var box2,box4;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,340,70,70);
    box2 = new Box(920,340,70,70);
    ground = new Ground(600,400,1200,20);
    pig1 = new pig(810,340);
    log1 = new log(810,300,300,PI/2)
    box3 = new Box(700,255,70,70);
    box4 = new Box(920,255,70,70);
    pig2 = new pig(810,255);
    log2 = new log(810,210,300,PI/2);
    box5 = new Box(810,165,70,70);
    log3 = new log(720,160,140,PI/5);
    log4 = new log(910,160,140,-PI/5);
    bird1 = new bird(20,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    console.log(box2.body.angle);
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}