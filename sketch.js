let state = 1;

let pX = 125, pY = 125, spd = 8;

let divsCreated = 0;

let selectedCharacter;

let images = [];

let imagePaths = [
  'Emote-Icons/UI_EmotionIcon3.png',
  'Emote-Icons/UI_EmotionIcon65.png',
  'Emote-Icons/UI_EmotionIcon113.png',
  'Emote-Icons/UI_EmotionIcon369.png',
  'Emote-Icons/UI_EmotionIcon80.png',
  'Emote-Icons/UI_EmotionIcon422.png',
  // Add more image paths as needed
];



let backgroundImage;

function preload() {
  // Load the image in the preload function
  backgroundImage = loadImage('mapCropped.png');
  for (let i = 0; i < imagePaths.length; i++) {
    images[i] = loadImage(imagePaths[i]);
    console.log(images[i]);
    console.log(imagePaths[i]);
  }
  
  npc1 = loadImage('Emote-Icons/UI_EmotionIcon192.png');
  npc2 = loadImage('Emote-Icons/UI_EmotionIcon306.png');
  npc3 = loadImage('Emote-Icons/UI_EmotionIcon325.png');
  apple1 = loadImage('apple1.png');
  apple2 = loadImage('apple2.png');
  appleField = loadImage('apple-field.png');
  home = loadImage('homescreen.png');


}

function setup(){
    myCanvas = createCanvas(windowWidth-50, windowHeight-50);
    myCanvas.parent('canvas');
    background(0);
    noStroke();
    fill(10);
}




function draw() {
  if (state == 1){
    background(home);
    rectMode(CENTER);
    fill(225);
    stroke("brown");
    strokeWeight(3);
    rect(windowWidth/2-155,windowHeight/2+110,200,100);
    rect(550,windowHeight/2-165,1000,100);
    fill("brown");
    noStroke();
    textStyle(BOLD);
    textSize(50);
    textAlign(LEFT);
    text("Village Chronicles: Quest for Prosperity", 75,190);
    textSize(35);
    fill("brown")
    text("Start Game",windowWidth/2-250,windowHeight/2+120);
  }

  if (state == 2){
    background(0);
    while(state == 2 && divsCreated < 6){
      background(0);
      console.log("test")
      
      // Create the div
      let div = createDiv();

      div.parent('selections');

      div.class('characters');
      
      // Set the ID for the div
      div.id('char' + (divsCreated + 1));
      
      // Position the div based on its creation order (adjust as needed)
      // div.position(10, divsCreated * 30);
      
      // Update the count of divs created
      divsCreated++;




    let img = createImg(imagePaths[divsCreated - 1]);
    img.parent('char' + divsCreated);

    img.class('imgchar');


  
    }

    fill(255)
    textAlign(CENTER);
    textSize(18);
    text("Please Select a Character...", width/2, height/2);
  }

  if (state == 3){
    document.getElementById('selections').style.display = 'none';
    // Set the loaded image as the background
    background(backgroundImage);


    // Draw a red rectangle at (pX, pY)
    // fill('red');
    // rect(pX - 10, pY - 10, 20, 20);
    // image(selectedCharacter, pX , pY, 40, 50);

    if (selectedCharacter) {
      let index = imagePaths.indexOf(selectedCharacter);
      if (index !== -1) {
        image(images[index], pX, pY, 50, 60);
      }
    }


  
  
  
  
      if (keyIsDown(87)||keyIsDown(38)) pY -= spd;
      if (keyIsDown(83)||keyIsDown(40)) pY += spd;
      if (keyIsDown(65)||keyIsDown(37)) pX -= spd;
      if (keyIsDown(68)||keyIsDown(39)) pX += spd;
  
  
      if (pY > windowHeight-125) pY = windowHeight-125;
      if (pX > windowWidth-100) pX = windowWidth-100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
      if (
        pX < windowWidth * 0.5 + 40 &&
        pX + 40 > windowWidth * 0.5 &&
        pY < windowHeight * 0.75 + 50 &&
        pY + 50 > windowHeight * 0.75
      ) {
        // Collision with NPC1, adjust character position or take other actions
        // For now, reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Save the current position for the next frame
      // prevPX = pX;
      // prevPY = pY;
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
  
  
  // windowWidth*.77, windowHeight*.25
  
  
  
  
      if (
        pX < windowWidth * 0.77 + 40 &&
        pX + 40 > windowWidth * 0.77 &&
        pY < windowHeight * 0.25 + 50 &&
        pY + 50 > windowHeight * 0.25
      ) {
        // Collision with NPC1, adjust character position or take other actions
        // For now, reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Save the current position for the next frame
      // prevPX = pX;
      // prevPY = pY;
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
  
  
  //windowWidth*.35, windowHeight*.45
  
  
  
  
      if (
        pX < windowWidth * 0.35 + 40 &&
        pX + 40 > windowWidth * 0.35 &&
        pY < windowHeight * 0.45 + 50 &&
        pY + 50 > windowHeight * 0.45
      ) {
        // Collision with NPC1, adjust character position or take other actions
        // For now, reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Save the current position for the next frame
      prevPX = pX;
      prevPY = pY;
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
     
  
      image(npc1, windowWidth*.5, windowHeight*.75,  40, 50);
      image(npc2, windowWidth*.77, windowHeight*.25, 40, 50);
      image(npc3, windowWidth*.35, windowHeight*.45, 40, 50);
  

    fill(255);
    rectMode(CORNER);
    stroke(0);
    strokeWeight(3);
    rect(0,0,75,35);
    noStroke();
    fill(0);
    textSize(25);
    textAlign(LEFT);
    text("back",10,25);
  }
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

function mouseClicked(){

  rect(windowWidth/2-160,windowHeight/2+110,200,100);
  if (state == 1){
    if (
      mouseX < windowWidth/2-60 && 
      mouseX > windowWidth/2-260 && 
      mouseY < windowHeight/2+160 && 
      mouseY > windowHeight/2+60
    ){
      state = 2;
    }
  }

  // images[i] = loadImage(imagePaths[i]);

  if (state == 2) {
    for (let i = 0; i < 7; i++) {
      let divId = 'char' + i;
      console.log(imagePaths[i]);

      // Check if the mouse is pressed over the element with ID 'chari'
      if (isMouseOverElement(divId)) {
        selectedCharacter = imagePaths[i-1];
        console.log("chosesn" + selectedCharacter);
        state = 3;
        break;
      }
    }
  }
  if (state == 3){
    if (
      mouseX < 75 && 
      mouseX > 0 && 
      mouseY < 35 && 
      mouseY > 0
    ){
      document.getElementById('selections').style.display = '';
      state = 2;
    }
  }
}

// Function to check if the mouse is over a specific element
 function isMouseOverElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    let rect = element.getBoundingClientRect();
    return mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;
  }
  return false;
}

  // if (state == 3){
  //   if (
  //     mouseX < 75 && 
  //     mouseX > 0 && 
  //     mouseY < 35 && 
  //     mouseY > 0
  //   ){
  //     state = 1;
  //   }
  // }

// }

// function mouseOverDiv(divId) {
//   // Check if the mouse is over the div with the specified id
//   let divElement = select('#' + divId);
//   if (divElement) {
//     let divX = divElement.position().x;
//     let divY = divElement.position().y;
//     let divWidth = divElement.width();
//     let divHeight = divElement.height();

//     return mouseX > divX && mouseX < divX + divWidth && mouseY > divY && mouseY < divY + divHeight;
//   }
//   return false;
// }

