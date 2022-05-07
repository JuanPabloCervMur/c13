var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nube,nibe,nubeses;
var moltre,moltres,mole;
var cact1,cact2,cact3,cact4,cactus,cactuses;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
    nibe=loadImage("nube.png");
    moltre=loadImage("moltres.png");
    cact1=loadImage("cactus 1.png");
    cact2=loadImage("cactus 2.png");
    cact3=loadImage("cactus 3.png");
    cact4=loadImage("cactus 4.png");
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    //create invisible pisotion
    invisibleGround = createSprite (200,190,400,10);
    invisibleGround.visible = false;
    nubeses=new Group ();
    mole=new Group ();
    cactuses=new Group ();
}
function draw() {
    background(220);
    //jump when the space button is pressed
    if (keyDown("space") &&  trex.y >= 80) {
        trex.velocityY = -10; 
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2; 
    }
    trex.collide(invisibleGround);
    
    nubes ();
    ave();
    cactuseses();
    drawSprites();
}
    function nubes () { 
        if(frameCount % 60 === 0 ){
            nube = createSprite (600,random (0,100),40,10);
            nube.addImage("nibe",nibe);
            nube.scale = 0.05;
            nube.velocityX = -3;
            nube.lifetime=200;
            nube.depth=trex.depth;
            nubeses.add (nube)
        } 
        
    
        
    }
    function ave () {
        if(frameCount % 60 === 0){
            moltres = createSprite (600,random(0,150),40,10);
            moltres.addImage("moltre",moltre) ;
            moltres.scale = 0.2 ;
            moltres.velocityX=-5;
            moltres.lifetime=200;
            mole.add (moltres);
        }

    }
    function cactuseses(){
        if(frameCount % 60 === 0){
            cactus = createSprite (600,160,10,40);
            var num= Math.round(random(1,4));
            switch(num){
                case 1:cactus.addImage(cact1);cactus.scale = 0.07; break;
                case 2:cactus.addImage(cact2);cactus.scale = 0.05 ; break;
                case 3:cactus.addImage(cact3);cactus.scale = 0.05 ; break;
                case 4:cactus.addImage(cact4);cactus.scale = 0.05 ; break;
               
                default:break;
            }
            
            cactus.velocityX=-5;
            cactus.lifetime=200;
            cactuses.add (cactus);
        }
    }
