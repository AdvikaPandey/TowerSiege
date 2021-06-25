const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var baseImg, bgImg, bg2Img,birdImg,enemyImg,groundImg,sling1Img,sling2Img,sling3Img,smokeImg,wood1Img,wood2Img;

function preload(){
    baseImg = loadImage("sprites/base.png");
    bgImg = loadImage("sprites/bg2.jpg");
    birdImg = loadImage("sprites/bird.png");
    enemyImg = loadImage("sprites/enemy.png");
    groundImg = loadImage("sprites/enemy.png");
    sling1Img = loadImage("sprites/sling1.png");
    sling2Img = loadImage("sprites/sling2.png");
    sling3Img = loadImage("sprites/sling3.png");
    smokeImg = loadImage("sprites/smoke.png");
    wood1Img = loadImage("sprites/wood1.png");
    wood2Img = loadImage("sprites/wood2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:500,y:200});

  ground = new Ground(displayWidth/2,displayHeight,displayWidth,20);
  Stand = new Ground(690,500,250,20);

 //level One
  block1 = new Box(630,380,30,40);
  block2 = new Box(660,380,30,40);
  block3 = new Box(690,380,30,40);
  block4 = new Box(720,380,30,40);
  block5 = new Box(750,380,30,40);
  //level Two
  block6 = new Box(660,340,30,40);
  block7 = new Box(690,340,30,40);
  block8 = new Box(720,340,30,40);
  //level Three
  block9 = new Box(690,300,30,40);
}

function draw() {
  background(bgImg); 
  Engine.update(engine); 
  drawSprites();
  ground.display();
  Stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
}