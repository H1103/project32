class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    fill("purple");
    strokeWeight(4);
    stroke("white");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
