class createDrops  {
  constructor(x,y){
  var options= {
      'friction':0.1,
      'restitution': 2
  }
  this.rain=Bodies.circle(x,y,5,options)
          this.radius=5
          World.add(world, this.rain);
        }
        back(){
          if(this.rain.position.y>height){
            Matter.Body.setPosition=(this.rain,{x:random(0,400),y:random(0,400)})
          }
        }
       show(){
          fill(blue)
         ellipseMode(CENTER);
         ellipse( this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        }
  }