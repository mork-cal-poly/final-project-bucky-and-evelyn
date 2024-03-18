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


function draw() {
  background(220);

  if (timer > 60 && timer < 100) {
    text("Hi!", 200, 200);
  }
  timer++;
}


