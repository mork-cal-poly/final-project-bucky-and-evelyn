let timer = 0;
//polarbear
let frontLegRotate = 0;
let backLegRotate = 0;
let rotateVariable = 0;
let variable2 = 1;
let moveOut = 750;

//Bubbles
//set 1
let bubbleX = [];
let bubbleY = [];
let bubbleNum = 15;
let bubbleScale = [];
let bubbleMove = -1;

//set 2
let bubbleX2 = [];
let bubbleY2 = [];
let bubbleNum2 = 15;
let bubbleScale2 = [];
let bubbleMove2 = -2;

let clickedShark = 0;
let clickedPenguin = false;
let clickedSeaotter = 0;
let clickedBear = 0;
let clickedPuffer = 0;
let fishes1= 10;
let fishes2= 660;
let fishesX= 600;
let fishesY = 260;
let fishes5 = 270;
let fishesX1= 177;
let fishesY1 = 280;
let scene = 0;

//Shark position&variables
let sharkX = 290;
let sharkY= 420;
let Sha = 750;
let SharkSpeed = -1.5;

//Otter position&variables
let otterX = 0;
let otterY= 420;
let ott = 0;
let OtterSpeed = 1.5;


//pufferfish position&variable
let puffX= 0;
let puffY= 356;
let puff = 0;
let PufferSpeed = 1.5;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(700, 500);
  myCanvas.parent("canvas-parent");

  for (let i = 0; i < bubbleNum; i++) {
    bubbleX[i] = random(350,2100);
    bubbleY[i] = random(1500, 2500);
    bubbleScale[i] = random (0.2,0.5);   
  }

  for (let set2 = 0; set2 < bubbleNum2; set2++) {
    bubbleX2[set2] = random(350,2100);
    bubbleY2[set2] = random(1500,2500);
    bubbleScale2[set2] = random (0.2,0.5);
  }

}
function preload(){
  img = loadImage('../images/waves_2.svg');
  img2 = loadImage('../images/nature_1.svg');
  img3 = loadImage('../images/nature2.svg');
  img4 = loadImage('..images/nature3.svg');
  img5 = loadImage('../images/nature4.svg');
  img6 = loadImage('../images/rocks.svg');
  img7 = loadImage('../images/rocks2.svg');
  img8 = loadImage('../images/rocks3.svg');
  img9 = loadImage('../images/rocks4.svg');
  img10 = loadImage('../images/cloud.svg');
  img11 = loadImage('../images/cloud2.svg');
  img12 = loadImage('../images/cloud3.svg');
  img13 = loadImage('../images/cloud4.svg');
  img14 = loadImage('../images/fishes.svg');
  img15 = loadImage('../images/fishes2.svg');
  img16 = loadImage('../images/fishes3.svg');
  img17 = loadImage('../images/fishes5.svg');
  img18 = loadImage('..images/fishes6.svg');
  img19 = loadImage('../images/penguin.svg');
 
}


function draw() {
  background(220);

   //background
   drawSky();
   drawClouds();
   drawRocks();
   backgroundCol();
   drawWaves();
   drawBack();
   drawNature();

//bubbles
  for(let i = 0; i < bubbleNum; i++) {
     bubbles(bubbleX[i], bubbleY[i], bubbleScale[i]);
     bubbleY[i] += bubbleMove;
     if(bubbleY[i] < 1300)
       bubbleY[i] = random(1500,2500)
  }
  
  for(let i = 0; i < bubbleNum2; i++) {
     bubbles(bubbleX2[i], bubbleY2[i], bubbleScale2[i]);
     bubbleY2[i] += bubbleMove2;
     if(bubbleY2[i] < 1300)
       bubbleY2[i] = random(1500,2500)
  }
  //Backfishes movement
  fishes1 = fishes1 + 0.2;
  fishes2 = fishes2 - 0.2;
  fishes5 = fishes5 + 0.2;
  fishesY = fishesY + 0.1;
  fishesX = fishesX - 0.1;
  fishesY1 = fishesY1 + 0.1;
  fishesX1 = fishesX1 + 0.1;
  drawFishes5(fishesX1, fishesY1);
  drawFishes3(fishesX, fishesY);
  drawFishes1(fishes1, 367);
  drawFishes2(fishes2, 300);
  drawFishes4(fishes5, 390);
  drawPenguin(181,100);
  drawPoles();

   //Polar bear
   push();
   drawPolarBear(moveOut,180,0.5);
   moveOut = moveOut - 2*variable2
    if (moveOut == 490 && clickedBear < 2 ){
     variable2 = 0
   } 
   
   rotateVariable = rotateVariable + variable2
   if (rotateVariable == 10){
     rotateVariable = 0
   }
   
   if (rotateVariable >= 5){
     frontLegRotate = 20
   } else {
     frontLegRotate = 0
   }
   if (rotateVariable >= 5){
     backLegRotate = -20
   } else {
     backLegRotate = 0
   }
   pop();

    //Seaotter text&movement
  ott = ott + OtterSpeed;
  drawSeaotter(ott,240,0.11);
  if (ott>= 250 && clickedSeaotter < 2){
    ott = 250
  }

  //shark movement
  Sha = Sha + SharkSpeed;
  drawShark(Sha, 200);
  if (Sha<=350 && clickedShark < 2){
    Sha = 350
  } 

  //PufferFish movement
  puff = puff + PufferSpeed;
  drawPufferFish(puff, 250, 0.8);
  if (puff>=50 && clickedPuffer < 2){
    puff = 50
  } 

  drawPoles();

  //otter text
  if (clickedSeaotter == 1) {
    fill(255);
    rect(251, 195 , 180, 25);
    fill(0);
    text("I like to hold hands when I sleep", 257, 210);
  }
    //shark text
  if (clickedShark == 1) {
    fill(255);
    rect(sharkX + 100, sharkY, 280, 30);
    fill(0);
    text("Di you know my skeletons are made of cartilage?", 400, 435);
  }

  //Penguintext
     if (clickedPenguin) {
      fill(255);
      rect(65, 69, 250, 30);
      fill(0);
      text("My knees are angle so I'm always squatting", 68, 87);
      }

  //bear text
    if (clickedBear==1) {
      fill(255);
      rect(390, 110, 190, 30);
      fill(0);
      text("I can run as fast as 25 mph", 400, 130);
      }

      //pufferfishtext
  if(clickedPuffer ==1){
    fill(255);
    rect(95, 342, 250, 30);
    fill(0);
    text("Did you know my spines are modified scales?", 99, 357);
    }
}


