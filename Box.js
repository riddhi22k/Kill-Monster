class Box {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed < 10){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    rect(0, 0, this.width, this.height);
    pop();
    }else {
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visibility - 5;
      tint(255,this.Visibility);
      rect( this.body.position, this.body.position, 70,70);
      pop();
    }
  }
    
      }
    
  

