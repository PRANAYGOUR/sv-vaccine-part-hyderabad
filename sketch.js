var vaccineHyhs1 , vaccineHyhs1Img;
var vaccineHyhs2 , vaccineHyhs2Img;
var vaccineHyhs3 , vaccineHyhs3Img;

function preload(){
  //loading images for oxygen
  
  vaccineHyhs1Img = loadImage("vaccineHyhs1.png");
  vaccineHyhs2Img = loadImage("vaccineHyhs2.png");
  vaccineHyhs3Img = loadImage("vaccineHyhs3.png");

}
function setup(){
createCanvas(3000,3000)
  // creating sprite image for oxygen available in chennai hospital no.1
vaccineHyhs1 = createSprite(800, 400,150,150);
vaccineHyhs1.addImage(vaccineHyhs1Img);

// creating sprite image for oxygen available in chennai hospital no.2
vaccineHyhs2 = createSprite(800, 1300,150,150);
vaccineHyhs2.addImage(vaccineHyhs2Img);


// creating sprite image for oxygen available in chennai hospital no.3
vaccineHyhs3 = createSprite(800, 2200,150,150);
vaccineHyhs3.addImage(vaccineHyhs3Img);

}

function draw(){
  background("red")
  drawSprites();
}