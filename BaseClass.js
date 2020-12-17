class BaseClass{
    constructor(x, y, width, height, color) {
        var options = {
            isStatic:false,
            restitution:0.8,
            stiffness:1,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
      }
}