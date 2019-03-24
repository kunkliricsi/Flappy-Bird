const { World, Engine, Body, Bodies } = Matter;

const cheat = ['c', 's', 'i', 'r', 'k', 'e'];
let cheatIndex = 0;

let world, engine;

let csirke;
let ground;

function preload() {
}

function setup() {
  $("body").css("overflow", "hidden");

  const canvas = createCanvas(innerWidth, innerHeight);
  engine = Engine.create();
  world = engine.world;
  
  world.gravity.y = 2;

  csirke = new Csirke(250, 150, 25);
  ground = new Ground(width/2, height + 25, width, 50);
}

function draw() {
  Engine.update(engine);
  background(51);
  csirke.draw();
}

function keyPressed() {
  if (key == cheat[cheatIndex]) {
    if (cheatIndex == cheat.length - 1) {
      console.log("cheating");
      cheatIndex = 0;
    }
    else {
      cheatIndex++;
    }
  }
  else {
    cheatIndex = 0;
  }
  
  if (key == "w") {
    Body.setVelocity(csirke.body, {x: 0, y: -10});
  }
}