class Box{
  constructor(x, y, width, height,color){
    var options = {
      restitoution:0.4,
      friction:0.4
    }
    this.x=x;
    this.y=y;
    this.visibility = 255;
    this.color=color;
    this.body = Bodies.rectangle(x,y,width,height,color,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  score(){
    if(this.visibility<0 && this.visibility>=105){
      score++;
    }
  }

  display(){
    if(this.body.speed<3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color)
      rect(0,0,this.width,this.height);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility - 5;
      pop();
    }
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
  }
};