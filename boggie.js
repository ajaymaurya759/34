class Boggie{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
    
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      Matter.Body.setMass(this.body,this.body.mass*5);
      
     
      this.image=loadImage("images/coach.png");
    }
    show()
    {
        rectMode(CENTER);
        fill(red);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }