
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
 
  stone=new rock(200,340,200);
	mango1=new mango(1100,100,30);
	mango2=new mango(1175,200,35);
	mango3=new mango(1000,150,50);
	mango4=new mango(950,240,30);
	mango5=new mango(1065,210,35);
	mango6=new mango(1045,70,25);
  mango7=new mango(910,180,35);
  mango8=new mango(1240,225,30);
  mango9=new mango(1115,160,20);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stone.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  

  groundObject.display();
}
