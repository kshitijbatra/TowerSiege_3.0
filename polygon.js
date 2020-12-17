class Polygon{
    constructor(x,y,r){
   var options={
    isStatic:false,
    density: 0.1
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
    }
    
    display(){
        var paperPos = this.body.position;
        push();
        strokeWeight(3);
        imageMode(CENTER);
        fill(255,0,255);
        image(this.image,paperPos.x,paperPos.y,this.r,this.r);
        pop();
    }
}