//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dogImg = loadImage("Dog.png")
  happyImg = loadImage("happydog.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog= createSprite(100,300,40,40);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  var foodstock=database.ref("food");
  foodstock.on("value",readstock);
  
}


function readstock(data)
{
  foodread = data.val();
  console.log(foodread);
}


function writeStock(x)
{
  console.log("write stock");
  if(x<=0)
  {
    x=0;
  }
  else
  {
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}


function draw() {  

background(46, 139, 87);

if(keyWentDown(UP_ARROW))
{
  console.log("up_arrow");
  dog.addImage(happyImg);
  writeStock(foodread)
}
else if(keyWentUp(UP_ARROW))
{
  dog.addImage(dogImg);
}

  drawSprites();
  //add styles here
textSize(13);
fill("green");
stroke("blue");
  text("Press UP Arrow key to feed the dog",250,400);

}



