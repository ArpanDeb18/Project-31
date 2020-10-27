const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  baseW = new Ground(0, 795, 5000, 10);
  sideW1 = new Ground(5, 0, 10, 5000);
  sideW2 = new Ground(475, 0, 10, 5000);
  topW = new Ground(0, 5, 5000, 10);

  ground = new Ground(240, 785, 460, 10);
  

  for(var k = 40; k <= width; k = k + 80){
    divisions.push(new Division(k, 630, 10, divisionHeight));;
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  

  var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1200, 
			height: 700, 
			wireframes: false 
		} 
  });
  
  Engine.run(engine);
  //Render.run(render);
  
}

function draw() {
  background("black");
  
  

  ground.display2();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(230, 250), 20, 10));
  }

  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
 
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  baseW.display();
  sideW1.display();
  sideW2.display();
  topW.display();

}