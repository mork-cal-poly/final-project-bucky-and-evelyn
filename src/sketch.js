
let scene = 0;
let clicked = false;

let buildX;
let buildY;
let buildS;

let bubbleX0 = [];
let bubbleY0 = [];
let bubbleNum0 = 20;
let bubbleScale0 = [];
let bubbleMove0 = 0;

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

//Shark position&variables
let sharkX = 290;
let sharkY= 420;
let Sha = 750;
let SharkSpeed = -2;

//Otter position&variables
let otterX = 0;
let otterY= 420;
let ott = 0;
let OtterSpeed = 2;

//pufferfish position&variable
let puffX= 0;
let puffY= 356;
let puff = 0;
let PufferSpeed = 2;

// timer
let t = 0;

function preload(){
  img = loadImage('waves_2.svg');
  img2 = loadImage('nature_1.svg');
  img3 = loadImage('nature2.svg');
  img4 = loadImage('nature3.svg');
  img5 = loadImage('nature4.svg');
  img6 = loadImage('rocks.svg');
  img7 = loadImage('rocks2.svg');
  img8 = loadImage('rocks3.svg');
  img9 = loadImage('rocks4.svg');
  img10 = loadImage('cloud.svg');
  img11 = loadImage('cloud2.svg');
  img12 = loadImage('cloud3.svg');
  img13 = loadImage('cloud4.svg');
  img14 = loadImage('fishes.svg');
  img15 = loadImage('fishes2.svg');
  img16 = loadImage('fishes3.svg');
  img17 = loadImage('fishes5.svg');
  img18 = loadImage('fishes6.svg');
  img19 = loadImage('penguin.svg');
 
}

function setup() {
  createCanvas(700, 500);
  
  for (let i = 0; i < bubbleNum0; i++) {
    bubbleX0[i] = random(-500,1300);
    bubbleY0[i] = random(-250, 100);
    bubbleScale0[i] = random (0.2,0.5);   
  }
  
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


function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(700, 500);
  myCanvas.parent("canvas-parent");

 
}

function draw() {
if (clicked >= 1){
  drawScene1();
  }
  if (clicked == 0){
  drawScene0(); 
  }
}

function mouseClicked()
{
  if(mouseX>265&&mouseX<430&&mouseY<400&&mouseY>250)
  clicked += 1;  
  
   if (mouseX> 415 && mouseX< 567 && mouseY< 407 && mouseY> 370) {
    clickedShark += 1 ;
    // console.log("hi");
    }

  //BB for penguin
  if (mouseX> 186 && mouseX< 217 && mouseY< 173 && mouseY> 100) {
    clickedPenguin = !clickedPenguin;
    // console.log("hi");
    }
  //BB for Seaotter
  if (mouseX> 215 && mouseX< 286  && mouseY< 255 && mouseY> 189) {
    clickedSeaotter += 1 ;
    // console.log("hi");
    }
  //polar bear
   if (mouseX> 434 && mouseX< 539  && mouseY< 220 && mouseY> 172) {
   if (clickedBear==0 ){
     clickedBear += 1
      
   }
     else if(clickedBear ==1){
       variable2 += 1
       clickedBear += 1
     }
     
}
  //pufferfish
   if (mouseX> 181 && mouseX< 241  && mouseY< 444 && mouseY> 378) {
    clickedPuffer += 1 ;

    }

} 

function drawScene0() {
  drawBackground();
  
   translate(200,290);
  for (let i = 0; i < bubbleNum0; i++) {
    bubbles0(bubbleX0[i], bubbleY0[i] + bubbleMove0, bubbleScale0[i]);
    bubbleMove0 = bubbleMove0 - 0.05
      if (bubbleY0[i] + bubbleMove0 < -400) {
      bubbleMove0 = 150;
  }
  }
  drawBuilding(50,-40,0.5);
  drawText();
}

function drawBackground(){
  background(20,143,225);
  noStroke();
  //sun
  fill(250,250,100);
  arc(700,0,150,150,PI/2,PI);
  
  //grass
  fill(100, 175, 90);
  rect(0,300,700,200);
  //cement
  fill(230);
  stroke(0);
  strokeWeight(1);
  quad(265,400,435,400,500,500,210,500)
  line(238,450,468,450)
  
  push();
  translate(250,250);
  scale(0.5);
  //roof
  stroke(0);
  strokeWeight(1);
  fill(200);
  arc(200,-200,1700,400,PI,2*PI);
  
  //windows
  fill(127, 200, 248);
  arc(200,10,1900,700,PI,2*PI);
  
  pop();
}

function drawBuilding(buildX,buildY,buildS){
  push();
  translate(buildX,buildY);
  scale(buildS);
  stroke(0);
  
  strokeWeight(1);
  
  //windows
  fill(127, 200, 248);
  quad(-175,-15,-175,315,-500,450,-500,0);  //left bottom
  quad(575,-15,575,315,900,450,900,0);      //right bottom
  
  
  line(-335,-280,-335,382);
  line(735,-280,735,382);
  line(-175,-312,-175,0);
  line(575,-312,575,0);
  line(200,-340,200,-15);
  
  //doors
  fill(255,255,255);
  rect(25,0,375,300);
  
  line(200,0,200,300);
  fill(0,0,0)
  ellipse(175,140,15,20);
  ellipse(225,140,15,20);
  
  //enter
  fill(100, 188, 247)
  rect(-125,0,150,300); //left panel
  rect(375,0,150,300); //right panel
  
  fill(200)
  quad(-175,-15,-125,0,-125,300,-175,315); //left
  quad(525,0,575,-15,575,315,525,300); //right
  quad(-175,-15,575,-15,525,0,-125,0); //top
  
  //sign
  fill(255, 153, 184)
  quad(-175,-15,-175,-200,575,-200,575,-15)
  
  
  pop();
}

function bubbles0(bubbleX0, bubbleY0, bubbleScale0){
  push();
    scale(bubbleScale0);
    translate(bubbleX0, bubbleY0);
  //main bubble
    fill('rgba(224, 240, 255, 0.5)');
    strokeWeight(2);
    stroke ('rgba(7, 31, 138, 0.5)');
    ellipse(0, 0, 50);
  //bubble shine
    noStroke();
    fill('white');
    ellipse(10, -10, 20);
  pop();
}

function drawText(){
  textFont('Impact');
  textSize(60);
  textAlign(CENTER, CENTER);
  
  stroke(255, 71, 126)
  strokeWeight(3)
  fill(255)
  text('SLO Aquarium', 150, -100);
}
