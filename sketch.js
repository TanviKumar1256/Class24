const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var pig1, pig2;
var bird;

function setup(){
    var canvas = createCanvas(750,750);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(540,650,50,50); 
    box2 = new Box(440,650,50,50);
    box3 = new Box(540,490,50,50);

    ground = new Ground(375,height,750,20); 

    log1 = new Log(490,550,100, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log1.display();
    ground.display();
}