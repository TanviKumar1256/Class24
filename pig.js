class Pig{
    constructor(x,y){
        var options ={
          'density' : 1.0,
          'restitution':0.8,
          'friction':0.3
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.height = 50;
        this.width = 50;
        Matter.body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos,y);
        rotate(angle);
        rectMode(CENTER);
        stroke("green");
        rect(0,0,this.width,this.length);
        Pop();
    }
 
 
 }