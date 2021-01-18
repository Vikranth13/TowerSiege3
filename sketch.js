
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ground, ground2, ground3;
var bg;
var score = 0;
function preload()
{
  getData();
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  invisground = new Ground(600,680,1200,20);
  ground = createSprite(600,670,1200,20);
  ground.shapeColor = "brown";

  invisground2 = new Ground(520,455,340,10);
  ground2 = createSprite(505,450,300,10);
  ground2.shapeColor = "brown";

  invisground3 = new Ground(900,305,225,10);
  ground3 = createSprite(900,300,225,10);
  ground3.shapeColor = "brown";

  t1l11 = new BBox(385,425,40,50);
  t1l12 = new BBox(425,425,40,50);
  t1l13 = new BBox(465,425,40,50);
  t1l14 = new BBox(505,425,40,50);
  t1l15 = new BBox(545,425,40,50);
  t1l16 = new BBox(585,425,40,50);
  t1l17 = new BBox(625,425,40,50);

  t1l21 = new PBox(425,400,40,50);
  t1l22 = new PBox(465,400,40,50);
  t1l23 = new PBox(505,400,40,50);
  t1l24 = new PBox(545,400,40,50);
  t1l25 = new PBox(585,400,40,50);

  t1l31 = new GBox(465,375,40,50);
  t1l32 = new GBox(505,375,40,50);
  t1l33 = new GBox(545,375,40,50);

  t1l41 = new BlBox(505,350,40,50);


  t2l11 = new BBox(820,275,40,50);
  t2l12 = new BBox(860,275,40,50);
  t2l13 = new BBox(900,275,40,50);
  t2l14 = new BBox(940,275,40,50);
  t2l15 = new BBox(980,275,40,50);

  t2l21 = new GBox(860,225,40,50);
  t2l22 = new GBox(900,225,40,50);
  t2l23 = new GBox(940,225,40,50);

  t2l31 = new PBox(900,175,40,50);

  p = new Polygon(50,350);


  slingshot = new SlingShot(p.body,{x:50, y:350});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  // background(0);
  if(bg)
    {
        background(bg);
    }
    else
    {
        background(0);
    }
  
  
  drawSprites();
  ground.display();
  ground2.display();
  ground3.display();
  p.display();
  t1l11.display();
  t1l12.display();
  t1l13.display();
  t1l14.display();
  t1l15.display();
  t1l16.display();
  t1l17.display();

  t1l21.display();
  t1l22.display();
  t1l23.display();
  t1l24.display();
  t1l25.display();

  t1l31.display();
  t1l32.display();
  t1l33.display();

  t1l41.display();

  
  t2l11.display();
  t2l12.display();
  t2l13.display();
  t2l14.display();
  t2l15.display();

  t2l21.display();
  t2l22.display();
  t2l23.display();

  t2l31.display();



  t1l11.score();
  t1l12.score();
  t1l13.score();
  t1l14.score();
  t1l15.score();
  t1l16.score();
  t1l17.score();

  t1l21.score();
  t1l22.score();
  t1l23.score();
  t1l24.score();
  t1l25.score();

  t1l31.score();
  t1l32.score();
  t1l33.score();

  t1l41.score();

  
  t2l11.score();
  t2l12.score();
  t2l13.score();
  t2l14.score();
  t2l15.score();

  t2l21.score();
  t2l22.score();
  t2l23.score();

  t2l31.score();
  
  textSize(24);
  fill("red");
  text("Drag the polygon and release it, to launch it to knock the blocks off.",300,50);

  textSize(14);
  fill("red");
  text("Press space to get another try!",520,550);

  textSize(20);
  fill("red");
  text("SCORE: " + score,20,200)
}

 function mouseDragged(){
     Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY});
 }


function mouseReleased(){
       slingshot.fly();
  }

 function keyPressed(){
 	if(keyCode === 32){
     slingshot.attach(p.body);
     Matter.Body.setPosition(p.body, { x: 50, y: 350 });
	}
 }

 async function getData()
{
    var data = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var dataJson = await data.json();
    var dt = dataJson.datetime;
    var hr = dt.slice(11,13);
    if(hr <= 06 && hr >= 19)
    {
        bg = loadImage("night.jpg");
    }
    else
    {
        bg = loadImage("day.png");
    }

}