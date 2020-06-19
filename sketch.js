var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200, 800);
  
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameObject1)) {
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}