
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;


  ground = new Ground(240, 748, 480, 15);
   
    

    for (var i = 0; i <= 480; i = i + 80) {
        divisions.push(new Bar(i, 750 - 300 / 2, 10, 300));
    }
    for (var k = 40; k <= 470; k = k + 50) {
        plinkos.push(new Plinko(k, 75));
    }
    for (var k = 80; k <= 460; k = k + 50) {
        plinkos.push(new Plinko(k, 175));
    }
    for (var k = 40; k <= 480; k = k + 50) {
        plinkos.push(new Plinko(k, 275));
    }
    for (var k = 80; k <= 400; k = k + 50) {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    textSize(30)
    fill("orange")
   text("PLINKO GAME",155,25)


    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width ), 0, 11));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    for (var m = 0; m < divisions.length; m++) {

        divisions[m].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
}