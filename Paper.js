class Paper{
  constructor(x,y,r){
    
  
  var options={
    isStatic : false,
   friction : 0,
   density : 1.2,
   restitution : 0
  }

    this.x = x;
    this.y = y;
    this.r = r;

    this.image = loadImage("paper.png");
    this.Body = Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.Body);
  }

  display(){
    var paperpos = this.Body.position;
    var angle = this.Body.angle;

    
    push();
    translate(paperpos.x,paperpos.y);
    rotate(angle);
    rectMode(CENTER);
    image(this.image,0,0,100,100);
    pop();

  }
}