class RedGreen {
    constructor(x,y,w,h) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;

      this.color = color(random(0,255),random(0,255),0) ;
      World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.w,this.h);
        fill("black");
        stroke("black");
        textSize(30);
        text("RedGreen",pos.x-70,pos.y-200);
    }
  
  };