const { World, Engine, Events, Body, Bodies } = Matter;

const cheat = ['c', 's', 'i', 'r', 'k', 'e'];
let cheatIndex = 0;
let isCheating = -1;

let world, engine;
let speed;

let csirke;
let ground;
let pipes = [];

let points = 0;

function preload() {
}

function setup() {
  $("body").css("overflow", "hidden");

  const canvas = createCanvas(innerWidth, innerHeight);

  engine = Engine.create();
  world = engine.world;
  speed = 3;
  
  world.gravity.y = 2;

  csirke = new Csirke(250, 150, 25);
  ground = new Box(width/2, height + 25, width, 50, true);
  
  window.setInterval(addPipe, 1500);

  textSize(40);
  textAlign(CENTER);
  window.setInterval(() => points += 0.01, 10);

  Events.on(engine, 'collisionStart', function(event) {
    csirke.remove();
    csirke = new Csirke(250, 150, 25);
    pipes.forEach((p) => p.remove());
    pipes = [];
    points = 0;
  });
}

function draw() {
  Engine.update(engine);

  background(51);

  csirke.draw();
  pipes.forEach((p) => p.draw());

  fill(125);
  text(points.toFixed(2), width/2, height*0.2);
  fill(256);
}

function addPipe() {
  var width = Math.floor((Math.random() * 80) + 240);
  var position = Math.floor((Math.random() * height * 0.5) + height * 0.25)

  pipes.push(new Pipe(position, width));
}

function mousePressed() {
  key = "w";
  this.keyPressed();
}

function keyPressed() {
  handleCheating(key);

  if (key == "w") {
    csirke.jump();
  }
}

function handleCheating(key) {
  if (key == cheat[cheatIndex]) {
    if (cheatIndex == cheat.length - 1) {
      isCheating *= -1;
      cheatIndex = 0;
    }
    else {
      cheatIndex++;
    }
  }
  else {
    cheatIndex = 0;
  }
}