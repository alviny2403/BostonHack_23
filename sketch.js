let state = 1;

let pX = 125, pY = 125, spd = 8;

let divsCreated = 0;

let pCreated = 0;

let selectedCharacter;

let images = [];

let value;

let dialogueState = 0;

let catDialogue = [
  "Meow... Oh, hello there, traveler. Meow...",
  "Hey, little kitty. What seems to be the matter?",
  "Meow... It's just that these monsters nearby are causing trouble. Meow... I wish someone could help me with them.",
  "Monsters, huh? I can help. What do you need?",
  "These dreadful creatures that keep coming closer to our village. Can you protect us and beat the approaching monsters?",
  "Don't worry, I'll do my best to protect the village."



]



let imagePaths = [
  'Emote-Icons/UI_EmotionIcon3.png',
  'Emote-Icons/UI_EmotionIcon65.png',
  'Emote-Icons/UI_EmotionIcon113.png',
  'Emote-Icons/UI_EmotionIcon369.png',
  'Emote-Icons/UI_EmotionIcon80.png',
  'Emote-Icons/UI_EmotionIcon422.png',
  // Add more image paths as needed
];

class Apples{
  constructor(x,y,speed){
      this.xPos = x;
      this.yPos = y;
      this.spd = speed;
  }
}

let bucketX= 250, 
    bucketY= 550;

let applesArray = [];
for (let i=0; i<6; i++){
    let tempApple = new Apples(Math.random()*400+50,-50,5)
    applesArray.push(tempApple);
}
let appleNum = 0;
let appleQuestDone = false;

class EnemyShip{
  constructor(x, y, r, g, b, radius, speed){
      this.xPos= x;
      this.yPos= y;
      this.redValue= r;
      this.greenValue= g;
      this.blueValue= b;
      this.radius= radius;
      this.speed= speed;
  }
}

// Bullet generation
class Projectile{
  constructor(x, y, speed){
      this.xPos= x;
      this.yPos= y;
      this.speed= speed;
  }
}

// initialize parameters for monsters minigame
let shootX = 250, shootY = 350, userScore= 150, enemiesLeft= 25, bulletsFired= 0, bulletsHit= 0;
let enemyArray= [], bulletArray= [];
let monsterQuestDone = false;

function setup(){
    myCanvas = createCanvas(windowWidth-50, windowHeight-50);
    myCanvas.parent('canvas');
    background(0);
    noStroke();
    fill(10);
}

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
  appleField = loadImage('apple-field.png');
  home = loadImage('homescreen.png');
  monster = loadImage('Emote-Icons/UI_EmotionIcon175.png');
  forest = loadImage('forest.png');

}

let rabbitDiagNum = 0;
let catDiagNum = 0;

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
    text("Village Chronicles: Quest for Prosperity", 75,windowHeight/2-145);
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
    background(backgroundImage);
    document.getElementById('selections').style.display = 'none';
    while(pCreated < 1){
    let p = createP("In the quaint yet enchanting village nestled among gentle, swaying trees and wooden houses, a captivating adventure unfolds. As the characters explore this idyllic setting, they embark on a journey filled with intriguing puzzles while helping the villagers.\n Press an arrow key to begin!");
    console.log("textcreated")

    p.parent('text');
    p.id('text1');

    document.getElementById('text').style.backgroundColor = "white"
    document.getElementById('text').style.border = "1px solid black"
    document.getElementById('text').style.filter = '';


      pCreated++;

    }

    if (keyIsPressed===true) {
      value = 1;}

    if(value == 1) {
        document.getElementById('canvas').style.filter = '';
        document.getElementById('text').style.display = 'none';
      }

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
        // Reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
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
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
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
  
      // Proximity detection for npc interactions
    if (dist(pX,pY,windowWidth*.5,windowHeight*.75) < 100){ //panda looking dude
    }
    if (dist(pX,pY,windowWidth*.77,windowHeight*.25) < 100){
      let catDialogue = [
        "Sad Cat: Meow... Oh, hello there, \ntraveler. Meow...",
        "Player: Hey, little kitty. What seems \nto be the matter?",
        "Sad Cat: Meow... It's just that these \nmonsters nearby are causing trouble. \nMeow... I wish someone could help me \nwith them.",
        "Player: Monsters, huh? I can help. \nWhat do you need?",
        "Cat: These dreadful creatures that \nkeep coming closer to our village. Can \nyou protect us and beat the approaching \nmonsters?",
        "Player: Don't worry, I'll do my best \nto protect the village."
      ]
      fill(0);
      rect(windowWidth*.65,windowHeight*.55,250,150);
      fill(255);
      if (!monsterQuestDone){
        textSize(12);
        text(catDialogue[catDiagNum],windowWidth*.66,windowHeight*.60)
        text("-->click here to continue<--",windowWidth*.66,windowHeight*.72)
      } else {
        text("Quest Finished\n :)",windowWidth*.68,windowHeight*.65)
      }
    }
    if (dist(pX,pY,windowWidth*.35,windowHeight*.45) < 100){
      let rabbitDialogue = [
        "Rabbit: Oh, hello there! I've been \nhopping around, trying to find someone \nto help me with a little task.",
        "Player: Hi! What do you need help with?",
        "Rabbit: Well, you see, I spotted the \njuiciest apples in that orchard over \nthere, but they're a bit too quick to ripen \nand fall down. I was wondering if you \ncould lend me a paw, or rather, a hand?",
        "Player: Sure thing! I can help you pick \nthe apples. Lead the way.",
        "Rabbit: Great! Follow me, and let's \ngather those delicious apples together."
      ]
      fill(0);
      rect(windowWidth*.65,windowHeight*.55,250,150);
      fill(255);
      if (!appleQuestDone){
        textSize(12);
        text(rabbitDialogue[rabbitDiagNum],windowWidth*.66,windowHeight*.60)
        text("-->click here to continue<--",windowWidth*.66,windowHeight*.72)
      } else {
        text("Quest Finished\n :)",windowWidth*.68,windowHeight*.65)
      }
    }

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

  if (state == 4){
    background(appleField);
        if (selectedCharacter) {
          let index = imagePaths.indexOf(selectedCharacter);
          if (index !== -1) {
            image(images[index], bucketX, bucketY, 50, 60);
          }
        }

        // left right motion of character
        if (keyIsDown(37)) bucketX -= 5;
        if (keyIsDown(39)) bucketX += 5;

        image(apple1,applesArray[appleNum].xPos,applesArray[appleNum].yPos,30,30);

        applesArray[appleNum].yPos += applesArray[appleNum].spd;
        console.log(applesArray[appleNum].yPos)

        // boundary parameters for collision
        if (applesArray[appleNum].yPos > 550){
            applesArray[appleNum].yPos = -50;
            state = 3;
        }
        if (appleNum < 5){
            if (
                applesArray[appleNum].yPos > bucketY-20 &&
                applesArray[appleNum].yPos < bucketY+20 &&
                applesArray[appleNum].xPos > bucketX-25 &&
                applesArray[appleNum].xPos < bucketX+25
            ){
                applesArray[appleNum] = 0;
                appleNum++;
            }
        } else {
            state = 3;
            appleQuestDone = true;
        }
        console.log(applesArray);
        console.log(appleNum);

      // Display data
      fill(255);
      textSize(20);
      text("Apples left: "+(5-appleNum), 25,windowHeight-100);
      text("<-- & -->\nTo Move ", 310,windowHeight-120);

  }

  if (state == 5){
    background(forest);

    // Create "enemies" using values stored in the array
    for (let i= 0; i< enemyArray.length; i++){
        imageMode(CENTER);
        image(monster,enemyArray[i].xPos,enemyArray[i].yPos,30,30);
        enemyArray[i].xPos+= enemyArray[i].speed/5;
        imageMode(CORNER);
       }

       // your character
    if (selectedCharacter) {
      let index = imagePaths.indexOf(selectedCharacter);
      if (index !== -1) {
        image(images[index], shootX, shootY-30, 50, 60);
      }
    }

    // Movement of your ship (WASD to move)
    if (keyIsDown(87)||keyIsDown(38)) shootY -= 2;
    if (keyIsDown(83)||keyIsDown(40)) shootY += 2;
    if (keyIsDown(65)||keyIsDown(37)) shootX-= 2;
    if (keyIsDown(68)||keyIsDown(39)) shootX+= 2;

    // Boundaries of the ship
    if (shootY  > 480) shootY  = 480;
    if (shootY  < 20) shootY = 20;
    if (shootX > 250) shootX= 250;
    if (shootX < 20) shootX= 20;

    // Generate bullet
    for (let i= 0; i< bulletArray.length; i++){
        fill(255)
        ellipse(bulletArray[i].xPos,bulletArray[i].yPos,5,5);
        bulletArray[i].xPos+= bulletArray[i].speed;
          
        // Delete bullet and enemy entity when in contact
        for (let j= 0; j< enemyArray.length; j++){
            if (
                dist(
                    bulletArray[i].xPos, 
                    bulletArray[i].yPos, 
                    enemyArray[j].xPos, 
                    enemyArray[j].yPos
                ) < 
                    enemyArray[j].radius/ 2
              ){
                enemyArray.splice(j,1);
                bulletArray.splice(i,1);
                enemiesLeft-- ;
                bulletsHit++ ;
                break;
              }
        }
    }

    // Display data
    fill(255);
    textSize(20);
    text("Monsters left: "+enemiesLeft, 25,windowHeight-75);
    text("Bullets hit: "+bulletsHit, 25, windowHeight-100);
    text("Shots fired: "+bulletsFired, 25, windowHeight-125);
    text("Press\nSpace\nTo Shoot", 310,windowHeight-120);

    if (enemiesLeft == 0){
        bulletArray.splice(0,bulletArray.length);
        state= 3;
        monsterQuestDone = true;
    }
    
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

function keyPressed(){
  if (key == ' ' && state == 5){
      // Generates a bullet for "Shoot Bullet" button
      let tempBullet= new Projectile(shootX+35, shootY, 5);
      bulletArray.push(tempBullet);
      userScore-- ;
      bulletsFired++ ;
  }
}

function keyPressed(){
  if (keyCode===13) {
    if (dialogueState ===0) {
      let p = creatP(catDialogue[dialogueStateState]);
      p.style.backgroundColor = 'white';
      p.style.border = '1px solid black';
      p.parent('text');
      p.id('text'+[i])

    } else if (dialogueState < catDialogue.length) {
      // Display additional cat dialogue based on the current dialogue state
      console.log(catDialogue[dialogueState]);

      // Create a new paragraph element for the additional dialogue
      let p = createP(catDialogue[dialogueState]);

      // Set styles for the paragraph element
      p.style.backgroundColor = 'white';
      p.style.border = '1px solid black';

      // Append the paragraph element to the 'text' element
      p.parent('text');
      p.id('text' + dialogueState);

      dialogueState++; // Increment the dialogue state
  }
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
    if (
      !appleQuestDone &&
      dist(pX,pY,windowWidth*.35,windowHeight*.45) < 100 &&
      mouseX < windowWidth*.65+250 && 
      mouseX > windowWidth*.65 && 
      mouseY < windowHeight*.55+150 && 
      mouseY > windowHeight*.55
    ){
      //state = 4;
      if (rabbitDiagNum<4){
        rabbitDiagNum++;
      } else {
        state = 4;
      }
    }
    if (
      !monsterQuestDone &&
      dist(pX,pY,windowWidth*.77,windowHeight*.25) < 100 &&
      mouseX < windowWidth*.65+250 && 
      mouseX > windowWidth*.65 && 
      mouseY < windowHeight*.55+150 && 
      mouseY > windowHeight*.55
    ){
      //state = 5;
      if (catDiagNum<5){
        catDiagNum++;
      } else {
        state = 5;
        for (let i= 0; i< 25; i++){
        let tempShip= new EnemyShip(
            random(750,900),
            random(25,475),
            random(0,255),
            random(0,255),
            random(0,255),
            random(25,50),
            random(-3,-1)
        );
        enemyArray.push(tempShip);
        }
      }
      // Create 25 "enemies"(circles) with randomized attributes
      // Load the "enemies" into an array
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

