var bucket, bucketImg;



function preload(){
  bucketImg = loadImage("bucket-removebg-preview.png");



}

function setup() {
  createCanvas(800,700);

  bucket = createSprite(400, 600, 50, 50);
  bucket.addImage(bucketImg);
  bucket.scale = 0.6;
  





}

function draw() {
  background("pink");  

  edges = createEdgeSprites();
  bucket.bounceOff(edges[0]);
  bucket.bounceOff(edges[1]);

if(keyDown("RIGHT_ARROW")){
  bucket.velocityX = 5;
}

if(keyDown("LEFT_ARROW")){
  bucket.velocityX = -5;
}



  drawSprites();
}