var fairyImg, starImg, backgroundImg;
var fairy, star, fairySound, starBody ;

function preload() {
  backgroundImg = loadImage("images/starnight.png"); 
  fairyImg= loadImage("images/fairy1.png", "images/fairy2.png")
  starImg = loadImage("images/star.png"); 
  fairySound = loadSound("sound/JoyMusic.mp3"); 
}

function setup() {
  createCanvas(800, 800);
  
  fairySound.play();

  fairy = createSprite(100, 700, 10, 10);
  fairy.addImage("fairy", fairyImg);
  fairy.scale = 0.15;

  star = createSprite(725, 40, 10, 10);
  star.addImage("star", starImg);
  star.scale = 0.2;

  engine = Engine.create;
  world = Engine.world;

  starBody = Bodies.circle(650, 30, 5, {restitution:0.5, isStatic:true});
  World.add(world, starBody);

  Engine.run(engine);
}


function draw() {
  background(backgroundImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(star.y > 470 && starBody.position.y > 470) {
    Matter.Body.setStatic(starBody, true);
  }
  console.log(star.y);
  drawSprites();
}

function keyPressed() {

  if(keyCode === "DOWN_ARROW") {
    Matter.Body.setStatic(starBody, false);
  }
  if(keyCode === "LEFT_ARROW") {
    fairy.x = fairy.position.x - 5;
  }
  if(keyCode === "RIGHT_ARROW") {
    fairy.x = fairy.position.x + 5;
  }

}