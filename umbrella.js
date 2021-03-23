class Umbrella {
                constructor(x,y){
                var options= {
                    isStatic:true,
                }
                this.image=loadImage("rs/walking_1.png")
                this.umbrella=Bodies.circle(x,y,20,options)
                        this.radius=20
                        World.add(world, this.umbrella);
                    }
                    
                    display(){
                        var pos= this.umbrella.position;
                    imageMode(CENTER);
                    image( this.image,this.umbrella.pos.x,this.rain.pos.y+70,300,300);
                    }
                }