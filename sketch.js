const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var p1,p2,p3,p4;

var engine, world;
var drops=[]
var rand;
var maxdrops=100;
var thundercount=0;
function preload() {
                p1=loadImage("ps/1.png");
                p2=loadImage("ps/2.png");
                p3=loadImage("ps/3.png");
                p4=loadImage("ps/4.png");

}

function setup(){
   
                engine = Engine.create();
                world = engine.world;
                createCanvas(400,700);
                umbrella1= new Umbrella(200,500)
                if(frameCount%150===0){
                for(var i=0;i<maxdrops;i++){
                drops.push( new createDrops(random(0,400),random(0,400)))
                }
                }
                }
function draw(){
                    Engine.update(engine);
                    background(0);

                rand=Math.round(random(1,4))
                if(frameCount%120===0){
                    thunder=createSprite(random(10,370),random(10,30),10,10)
                switch (rand) {
                    case 1:thunder.addImage(p1)
                    break;
                    case 2:thunder.addImage(p2)
                    break;
                    case 3:thunder.addImage(p3)
                    break;
                    case 4:thunder.addImage(p4)
                    break;
                    default: break;
                    
                }
                thunder.scale=random(0.3,0.6)
                }
                if(thundercount+10===frameCount&&thunder){
                thunder.destroy();
                }
                umbrella1.display();

                    for(var i=0;i<maxdrops;i++){
                        drops[i].back();
                        drops[i].show();
                        }
                        drawSprites()
                    }

