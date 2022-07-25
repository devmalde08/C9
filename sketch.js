var box

function setup() {
  createCanvas(500,500);
  box=createSprite(250,250,25,25)
}

function draw() 
{
  background("teal");
drawSprites()
if (keyDown(LEFT_ARROW)){
  box.x=box.x-5}
  if (keyDown(RIGHT_ARROW)){
    box.x=box.x+5}
    if (keyDown(UP_ARROW)){
      box.y=box.y-5}
      if (keyDown(DOWN_ARROW)){
        box.y=box.y+5}
}




