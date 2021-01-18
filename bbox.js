class BBox {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'friction': 0.3
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if (pos.y < 450) {
        rectMode(CENTER);
        fill("cyan");
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
          push();
          World.remove(world, this.body);
          this.visibility -=5;
          tint(255, this.visibility);
          pop();
        }
    }
    score()
    {
      if(this.visibility<0 && this.visibility>-105)
      {
        score++;
      }
    }
  };