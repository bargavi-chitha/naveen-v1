class BlueYellow{
    constructor(x,y,w,h) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      this.random=random(0,255);
      this.color = color(this.random,this.random,random(0,255)) ;
      World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.w,this.h);
        fill("black");
        textSize(30);
        stroke("black");
        text("BlueYellow",pos.x-70,pos.y-200);
    }
  
  };