
let pX = 125, pY = 125, spd = 7;

function setup(){
    myCanvas = createCanvas(windowWidth-50, windowHeight-50);
    myCanvas.parent('canvas');
    background(0);
    noStroke();
    fill(10);
    rectMode(CENTER);
}


let backgroundImage;

function preload() {
  // Load the image in the preload function
  backgroundImage = loadImage('mapCropped.png');
  character = loadImage('Emote-Icons/UI_EmotionIcon3.png');
  npc1 = loadImage('Emote-Icons/UI_EmotionIcon192.png');
  npc2 = loadImage('Emote-Icons/UI_EmotionIcon306.png');
  npc3 = loadImage('Emote-Icons/UI_EmotionIcon325.png');
}

function draw() {
  // Set the loaded image as the background
  background(backgroundImage);

  // Draw a red rectangle at (pX, pY)
  // fill('red');
  // rect(pX - 10, pY - 10, 20, 20);
  image(character, pX , pY, 40, 50);


    if (keyIsDown(87)||keyIsDown(38)) pY -= spd;
    if (keyIsDown(83)||keyIsDown(40)) pY += spd;
    if (keyIsDown(65)||keyIsDown(37)) pX -= spd; 
    if (keyIsDown(68)||keyIsDown(39)) pX += spd;

    if (pY > windowHeight-125) pY = windowHeight-125;
    if (pX > windowWidth-100) pX = windowWidth-100;
    if (pY < 20) pY = 20;
    if (pX < 20) pX = 20;


    image(npc1, windowWidth*.5, windowHeight*.75,  40, 50);
    image(npc2, windowWidth*.77, windowHeight*.25, 40, 50);
    image(npc3, windowWidth*.35, windowHeight*.45, 40, 50);

}


let clicks = 1;

function keyPressed() {
    if (keyCode===70 && clicks >0) {
        // console.log("test")
        clicks*=-1;
    document.getElementById('defaultCanvas0').style.width = "100vw";
    document.getElementById('defaultCanvas0').style.height = "100vh";

    } else if (keyCode===70 && clicks <0){
      console.log("test");
      clicks*=-1;
      document.getElementById('defaultCanvas0').style.width = "95vw";
      document.getElementById('defaultCanvas0').style.height = "95vh";
    }
  }

