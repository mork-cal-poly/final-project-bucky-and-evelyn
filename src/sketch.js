
// //polarbear
// let frontLegRotate = 0;
// let backLegRotate = 0;
// let rotateVariable = 0;
// let variable2 = 1;
// let moveOut = 750;

// //Bubbles
// //set 1
// let bubbleX = [];
// let bubbleY = [];
// let bubbleNum = 15;
// let bubbleScale = [];
// let bubbleMove = -1;

// //set 2
// let bubbleX2 = [];
// let bubbleY2 = [];
// let bubbleNum2 = 15;
// let bubbleScale2 = [];
// let bubbleMove2 = -2;

// let clickedShark = 0;
// let clickedPenguin = false;
// let clickedSeaotter = 0;
// let clickedBear = 0;
// let clickedPuffer = 0;
// let fishes1= 10;
// let fishes2= 660;
// let fishesX= 600;
// let fishesY = 260;
// let fishes5 = 270;
// let fishesX1= 177;
// let fishesY1 = 280;
// let scene = 0;

// //Shark position&variables
// let sharkX = 290;
// let sharkY= 420;
// let Sha = 750;
// let SharkSpeed = -1.5;

// //Otter position&variables
// let otterX = 0;
// let otterY= 420;
// let ott = 0;
// let OtterSpeed = 1.5;


// //pufferfish position&variable
// let puffX= 0;
// let puffY= 356;
// let puff = 0;
// let PufferSpeed = 1.5;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(700, 500);
  myCanvas.parent("canvas-parent");

  // for (let i = 0; i < bubbleNum; i++) {
  //   bubbleX[i] = random(350,2100);
  //   bubbleY[i] = random(1500, 2500);
  //   bubbleScale[i] = random (0.2,0.5);   
  // }

  // for (let set2 = 0; set2 < bubbleNum2; set2++) {
  //   bubbleX2[set2] = random(350,2100);
  //   bubbleY2[set2] = random(1500,2500);
  //   bubbleScale2[set2] = random (0.2,0.5);
  // }

}
function preload(){
  img = loadImage('../images/waves_2.svg');
  img2 = loadImage('../images/nature_1.svg');
  img3 = loadImage('../images/nature2.svg');
  img4 = loadImage('../images/nature3.svg');
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
  img18 = loadImage('../images/fishes6.svg');
  img19 = loadImage('../images/penguin.svg');
 
}
function drawScene1() {
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
    textFont('Arial');
    textSize(11);
    textAlign(LEFT,CENTER)
    text("I like to hold hands when I sleep.", 257, 210);
  }
    //shark text
  if (clickedShark == 1) {
    fill(255);
    rect(sharkX + 100, sharkY, 280, 30);
    fill(0);
    text("Did you know that my skeleton is made of cartilage?", 400, 435);
  }
      //Penguintext
      if (clickedPenguin) {
        fill(255);
        rect(65, 69, 250, 30);
        fill(0);
        text("My knees are angled so I'm always squatting.", 68, 87);
        
        }
        //bear text
  if (clickedBear==1) {
    fill(255);
    rect(390, 110, 190, 30);
    fill(0);
    text("I can run as fast as 25 mph.", 400, 130);
    
    }
  // text("("+ mouseX + ","+ mouseY + ")", 100, 400);
 
  //pufferfishtext
  if(clickedPuffer ==1){
    fill(255);
    rect(95, 342, 250, 30);
    fill(0);
    text("Did you know that my spines are modified scales?", 99, 357);
    
    }
}
function backgroundCol(){
  //draw rectangles, 15 pixels tall
  //light blue = r157,g229, b245
  //dark blue = r64, g132, b171
  let r = 157
  let g = 229
  let b = 245

  for (let y=260; y<= height; y+=7){
    noStroke();
    fill(r,g,b);
    rect(0,y,width,7);
    r = r - (157-57)/(height/7);
    g = g - (229-117)/(height/7);
    b = b - (245-135)/(height/7);
    
  }
}
function drawPoles(){
  push();
  noStroke();
  fill('black');
  rect(0,0,10,500);
  rect(350,0,10,500);
  rect(690,0,10,500);
  rect(0,260,700,5);
  pop();
}
function drawWaves(){
  push();
  translate(0,230);
  scale(2.4);
  image(img,0,0);
  pop();
  
}
function drawNature(){
  push();
  translate(600,435);
  scale(0.5);
  image(img3,0,0);
  pop();
  push();
  translate(370,400);
  scale(0.7);
  image(img4,0,0);
  pop();
  push();
  translate(0,410);
  scale(0.5);
  image(img2,0,0);
  pop();
}
function drawBack(){
  push();
 translate(0,430);
 scale(2.4);
 image(img5,0,0);
 pop();
}
function drawRocks(){
 push();
 translate(460,55);
 scale(1.3);
 image(img6,0,0);
 pop();
 push();
 translate(0,90);
 scale(1);
 image(img7,0,0);
 pop();
  push();
 translate(200,130);
 scale(0.7);
 image(img8,0,0);
 pop();
 push();
 translate(150,160);
 scale(0.5);
 image(img9,0,0);
 pop();
}
function drawSky(){
 //white to blue
 //light = r223, g242, b243
 //bluesky =r158, g242, b255
 let r = 223
 let g = 242
 let b = 243
 for (let y=0; y<= 180; y+=7){
   noStroke();
   fill(r,g,b);
   rect(0,y,width,7);
   r = r - (223-158)/(180/7);
   g = g - 0/(180/7);
   b = b + (255-243)/(180/7);
   
 }
 push();
 noStroke();
 fill('#5F5D5F');
 rect(0,150,700,60);
 pop();
 
 
}
function drawClouds(){
 push();
 translate(30,10);
 scale(0.4);
 image(img10,0,0);
 pop();
 push();
 translate(500,10);
 scale(0.5);
 image(img11,0,0);
 pop();
 push();
 translate(140,10);
 scale(0.5);
 image(img12,0,0);
 pop();
  push();
 translate(370,10);
 scale(0.3);
 image(img13,0,0);
 pop();
}
function drawFishes1(x,y){
 push();
 translate(x,y);
 scale(0.4);
 image(img14,0,0);
 pop();
}
function drawFishes2(x,y){
  push();
  translate(x,y);
  scale(0.4);
  image(img15,0,0);
  pop();
}
function drawFishes3(x,y){
  push();
  translate(x,y);
  scale(0.4);
  image(img16,0,0);
  pop();
}
function drawFishes4(x,y){
   push();
  translate(x,y);
  scale(0.2);
  image(img17,0,0);
  pop();
}
function drawFishes5(x,y){
   push();
  translate(x,y);
  scale(0.4);
  image(img18,0,0);
  pop();
}
function drawShark(x,y){
  push();
  noStroke();
  translate(x,y);
  fill('#218FD9')
  quad(44,161,86,211,130,212,116,161);
  quad(116,165,128,208,160,208,165,165);
  triangle(163,165, 218,191,160,208);
  triangle(192,179,252,156,218,191);
  triangle(225,183,241,203,197,196);
  triangle(116,165,168,127,165,165);
  triangle(106,209,136,208,122,231);
  fill('white');
  quad(66,188,86,211,130,212,123,188);
  quad(123,188,128,208,160,208,162,186);
  triangle(162,186, 218,191,160,208);
  ellipse(70,170,10,10);
  fill('black');
  ellipse(70,170,5);
  line(110,177,127,201);
  // arc(65,190,15,15,5*PI/4, 3*PI/4);
  // arc(50,185,10,10,2*PI,5*PI/2);
  pop();
  
}
function drawPenguin(x,y){
  push();
  translate(x,y);
  scale(0.5);
  image(img19,0,0);
  pop();
}
function drawSeaotter (x,y,s) {
  push();
  translate(x,y);
  scale(s);
  angleMode(RADIANS);
  
  fill(115,94,89)
  //hind
  ellipse(15,90,225,135); //leg 2
  ellipse(125,100,75,150); //foot 2
  ellipse(175,200,300,150); //tail
  
  //body
  fill(174,162,152)
  ellipse(-90,160,425,250); //body 2
  ellipse(-200,70,250,425); //body 1
  
  //limbs
  fill(115,94,89)
  ellipse(-275,25,70,140); //bicept 1
  push();
    translate(-45,200)
    rotate(PI/4);
    ellipse(-245,35,50,100); //forearm 1
  pop();
  ellipse(-125,25,70,140); //bicept 2
  push();
    translate(-220,200)
    rotate(3*PI/4);
    ellipse(-150,55,50,100); //forearm 2
  pop();
  ellipse(-225,200,150); //upper leg 1
  ellipse(-125,225,250,150); //leg 1
  ellipse(-15,200,75,160); //foot 1
 
  //head
  ellipse(-290,-250,70); //left ear
  ellipse(-110,-250,70); //right ear
  fill(174,162,152)
  ellipse(-200,-175,250); //head
  fill(255)
  ellipse(-250,-200,50); //left eye
  ellipse(-150,-200,50); //right eye
  fill(0)
  ellipse(-245,-205,30); //left eye pupil
  ellipse(-145,-205,30); //right eye pupil
  line(-200,-140,-235,-105) //left whisker
  line(-200,-140,-165,-105) //right whisker
  fill(209,73,91)
  arc(-200,-140,100,65,PI/4,3*PI/4) //mouth
  fill(115,94,89)
  ellipse(-200,-150,50,25); //nose
  
  pop();
}
function bubbles(bubbleX, bubbleY, bubbleScale){
  push();
    scale(bubbleScale);
    translate(bubbleX, bubbleY);
  //main bubble
    noStroke();
    fill('#8BCADEC6');
    stroke (7, 31, 138);
    ellipse(0, 0, 50);
  //bubble shine
    noStroke();
    fill('#ABD9EFC9');
    ellipse(10, -10, 20);
  pop();
}
function bubbles2(bubbleX2, bubbleY2, bubbleScale2){
  push();
    scale(bubbleScale2);
    translate(bubbleX2, bubbleY2);
  //main bubble
    noStroke();
    fill('#8BCADEC6');
    strokeWeight(2);
    stroke (7, 31, 138);
    ellipse(0, 0, 50);
  //bubble shine
    noStroke();
    fill('#ABD9EFC9');
    ellipse(10, -10, 20);
  pop();  
}

function drawPolarBear(x,y,s){
  push();
  translate(x,y)
  scale(s);
  fill('white');
  angleMode(DEGREES);
  //front leg
  push();
  translate(-80,30)
  rotate(frontLegRotate)
  rect(0,0,50 ,70)
  pop();
  
  push();
  //back leg
  translate(20,30)
  rotate(backLegRotate)
  rect(0,0,50 ,70)
  pop();
  
  //main
  quad(-60, -40, 60, -50, 60, 50, -60, 50);
  
  //behind
  quad(60,-50, 100, -10, 80, 50, 60, 50);
  //neck
  quad(-60, -40,  -60, 50, -120, 0, -100, -40);
  
  //head base
  quad(-100, -60, -100, 10, -160, 0, -160, -60)
  
  //snout
  quad (-185, -20, -180, 0, -160, 0, -160, -40)
  
  
  //eye
  push();
  fill(0,0,0);
  ellipse (-145, -35, 10)
  pop();
  
  //ear
  ellipse (-120,-60, 20)
  
  pop();
}
function drawPufferFish(x,y,s){
  push();
  noStroke();
  translate(x,y);
  scale(s);
  fill('#C7D166')
  ellipse(200,200,75);
  fill('white');
  ellipse(222,188,20)
  fill('black');
  ellipse(224,186,10);
  fill('#795548')
  triangle(206,152,207,164,201,161);
  triangle(181,157,188,164,182,166);
  triangle(166,171,176,173,170,179);
  triangle(158,187,165,186,164,193);
  triangle(156,205,163,200,165,205);
  triangle(158,216,167,212,168,216);
  triangle(166,230,171,220,175,226);
  triangle(179,237,179,229,185,231);
  triangle(194,241,190,233,196,235);
  triangle(210,241,205,233,211,232);
  triangle(226,234,219,229,224,225);
  ellipse(188,180,5);
  ellipse(171,195,5);
  ellipse(196,196,5);
  ellipse(181,210,5);
  ellipse(223,206,5);
  ellipse(194,224,5);
  ellipse(205,211,5);
  ellipse(213,225,5);
  pop();
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

function backgroundCol(){
  //draw rectangles, 15 pixels tall
  //light blue = r157,g229, b245
  //dark blue = r64, g132, b171
  let r = 157
  let g = 229
  let b = 245
  
for (let y=260; y<= height; y+=7){
    noStroke();
    fill(r,g,b);
    rect(0,y,width,7);
    r = r - (157-57)/(height/7);
    g = g - (229-117)/(height/7);
    b = b - (245-135)/(height/7);
    
  }
}
function drawPoles(){
  push();
  noStroke();
  fill('black');
  rect(0,0,10,500);
  rect(350,0,10,500);
  rect(690,0,10,500);
  rect(0,260,700,5);
  pop();
}
function drawWaves(){
  push();
  translate(0,230);
  scale(2.4);
  image(img,0,0);
  pop();
  
}
function drawNature(){
  push();
  translate(600,435);
  scale(0.5);
  image(img3,0,0);
  pop();
  push();
  translate(370,400);
  scale(0.7);
  image(img4,0,0);
  pop();
  push();
  translate(0,410);
  scale(0.5);
  image(img2,0,0);
  pop();
}
function drawBack(){
  push();
 translate(0,430);
 scale(2.4);
 image(img5,0,0);
 pop();
}
function drawRocks(){
 push();
 translate(460,55);
 scale(1.3);
 image(img6,0,0);
 pop();
 push();
 translate(0,90);
 scale(1);
 image(img7,0,0);
 pop();
  push();
 translate(200,130);
 scale(0.7);
 image(img8,0,0);
 pop();
 push();
 translate(150,160);
 scale(0.5);
 image(img9,0,0);
 pop();
}
function drawSky(){
 //white to blue
 //light = r223, g242, b243
 //bluesky =r158, g242, b255
 let r = 223
 let g = 242
 let b = 243
 for (let y=0; y<= 180; y+=7){
   noStroke();
   fill(r,g,b);
   rect(0,y,width,7);
   r = r - (223-158)/(180/7);
   g = g - 0/(180/7);
   b = b + (255-243)/(180/7);
   
 }
 push();
 noStroke();
 fill('#5F5D5F');
 rect(0,150,700,60);
 pop();
 
 
}
function drawClouds(){
 push();
 translate(30,10);
 scale(0.4);
 image(img10,0,0);
 pop();
 push();
 translate(500,10);
 scale(0.5);
 image(img11,0,0);
 pop();
 push();
 translate(140,10);
 scale(0.5);
 image(img12,0,0);
 pop();
  push();
 translate(370,10);
 scale(0.3);
 image(img13,0,0);
 pop();
}
function drawFishes1(x,y){
  push();
  translate(x,y);
  scale(0.4);
  image(img14,0,0);
  pop();
}
function drawFishes2(x,y){
  push();
  translate(x,y);
  scale(0.4);
  image(img15,0,0);
  pop();
}
function drawFishes3(x,y){
  push();
  translate(x,y);
  scale(0.4);
  image(img16,0,0);
  pop();
}
function drawFishes4(x,y){
   push();
  translate(x,y);
  scale(0.2);
  image(img17,0,0);
  pop();
}
function drawFishes5(x,y){
  push();
 translate(x,y);
 scale(0.4);
 image(img18,0,0);
 pop();
}
function drawShark(x,y){
 push();
 noStroke();
 translate(x,y);
 fill('#218FD9')
 quad(44,161,86,211,130,212,116,161);
 quad(116,165,128,208,160,208,165,165);
 triangle(163,165, 218,191,160,208);
 triangle(192,179,252,156,218,191);
 triangle(225,183,241,203,197,196);
 triangle(116,165,168,127,165,165);
 triangle(106,209,136,208,122,231);
 fill('white');
 quad(66,188,86,211,130,212,123,188);
 quad(123,188,128,208,160,208,162,186);
 triangle(162,186, 218,191,160,208);
 ellipse(70,170,10,10);
 fill('black');
 ellipse(70,170,5);
 line(110,177,127,201);
 // arc(65,190,15,15,5*PI/4, 3*PI/4);
 // arc(50,185,10,10,2*PI,5*PI/2);
 pop();
 
}
function drawPenguin(x,y){
 push();
 translate(x,y);
 scale(0.5);
 image(img19,0,0);
 pop();
}
function drawSeaotter (x,y,s) {
 push();
 translate(x,y);
 scale(s);
 angleMode(RADIANS);
 
 fill(115,94,89)
 //hind
 ellipse(15,90,225,135); //leg 2
 ellipse(125,100,75,150); //foot 2
 ellipse(175,200,300,150); //tail
 
 //body
 fill(174,162,152)
 ellipse(-90,160,425,250); //body 2
 ellipse(-200,70,250,425); //body 1
 
 //limbs
 fill(115,94,89)
 ellipse(-275,25,70,140); //bicept 1
 push();
   translate(-45,200)
   rotate(PI/4);
   ellipse(-245,35,50,100); //forearm 1
 pop();
 ellipse(-125,25,70,140); //bicept 2
 push();
   translate(-220,200)
   rotate(3*PI/4);
   ellipse(-150,55,50,100); //forearm 2
 pop();
 ellipse(-225,200,150); //upper leg 1
 ellipse(-125,225,250,150); //leg 1
 ellipse(-15,200,75,160); //foot 1

 //head
 ellipse(-290,-250,70); //left ear
 ellipse(-110,-250,70); //right ear
 fill(174,162,152)
 ellipse(-200,-175,250); //head
 fill(255)
 ellipse(-250,-200,50); //left eye
 ellipse(-150,-200,50); //right eye
 fill(0)
 ellipse(-245,-205,30); //left eye pupil
 ellipse(-145,-205,30); //right eye pupil
 line(-200,-140,-235,-105) //left whisker
 line(-200,-140,-165,-105) //right whisker
 fill(209,73,91)
 arc(-200,-140,100,65,PI/4,3*PI/4) //mouth
 fill(115,94,89)
 ellipse(-200,-150,50,25); //nose
 
 pop();
}
function bubbles(bubbleX, bubbleY, bubbleScale){
  push();
    scale(bubbleScale);
    translate(bubbleX, bubbleY);
  //main bubble
    noStroke();
    fill('#8BCADEC6');
    stroke (7, 31, 138);
    ellipse(0, 0, 50);
  //bubble shine
    noStroke();
    fill('#ABD9EFC9');
    ellipse(10, -10, 20);
  pop();
}
function bubbles2(bubbleX2, bubbleY2, bubbleScale2){
  push();
    scale(bubbleScale2);
    translate(bubbleX2, bubbleY2);
  //main bubble
  noStroke();
    fill('#8BCADEC6');
    strokeWeight(2);
    stroke (7, 31, 138);
    ellipse(0, 0, 50);
  //bubble shine
    noStroke();
    fill('#ABD9EFC9');
    ellipse(10, -10, 20);
  pop();  
}
function drawPolarBear(x,y,s){
  push();
  translate(x,y)
  scale(s);
  fill('white');
  angleMode(DEGREES);
  //front leg
  push();
  translate(-80,30)
  rotate(frontLegRotate)
  rect(0,0,50 ,70)
  pop();
  
  push();
  //back leg
  translate(20,30)
  rotate(backLegRotate)
  rect(0,0,50 ,70)
  pop();
  
  //main
  quad(-60, -40, 60, -50, 60, 50, -60, 50);
  
  //behind
  quad(60,-50, 100, -10, 80, 50, 60, 50);
  //neck
  quad(-60, -40,  -60, 50, -120, 0, -100, -40);
  
  //head base
  quad(-100, -60, -100, 10, -160, 0, -160, -60)
  
  //snout
  quad (-185, -20, -180, 0, -160, 0, -160, -40)
  
  
  //eye
  push();
  fill(0,0,0);
  ellipse (-145, -35, 10)
  pop();
  
  //ear
  ellipse (-120,-60, 20)
  
  pop();
}
function drawPufferFish(x,y,s){
  push();
  noStroke();
  translate(x,y);
  scale(s);
  fill('#C7D166')
  ellipse(200,200,75);
  fill('white');
  ellipse(222,188,20)
  fill('black');
  ellipse(224,186,10);
  fill('#795548')
  triangle(206,152,207,164,201,161);
  triangle(181,157,188,164,182,166);
  triangle(166,171,176,173,170,179);
  triangle(158,187,165,186,164,193);
  triangle(156,205,163,200,165,205);
  triangle(158,216,167,212,168,216);
  triangle(166,230,171,220,175,226);
  triangle(179,237,179,229,185,231);
  triangle(194,241,190,233,196,235);
  triangle(210,241,205,233,211,232);
  triangle(226,234,219,229,224,225);
  ellipse(188,180,5);
  ellipse(171,195,5);
  ellipse(196,196,5);
  ellipse(181,210,5);
  ellipse(223,206,5);
  ellipse(194,224,5);
  ellipse(205,211,5);
  ellipse(213,225,5);
  pop();
}

function mouseClicked(){
  //BB for shark
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
