var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

var option={restitution:1, isStatic:true};

	starBody = Bodies.circle(650 , 30 , 5 , option);
	World.add(world, starBody);
	
	Engine.run(engine);

}



function draw() {
  background(bgImg);

  fairy.velocityX=0;
fairyvelocityY=0;

if(starBody.position.y>470){

	star.velocityY=0;
    star.velocityX=0;
}

keyPressed();

  drawSprites();

  

}

function keyPressed() {
	
	if (keyDown("RIGHT_ARROW")) {
		fairy.velocityX=2;
		fairy.velocityY=0;
		
		 
	   }
	   
	   if (keyDown("LEFT_ARROW")) {
		fairy.velocityX=-2;
		fairy.velocityY=0;
		}

		if (keyDown("DOWN_ARROW")) {
			star.velocityX=0;
			star.velocityY=1;
			}

		
}
