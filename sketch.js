//cloud
let xPos=75
let xPos2=50
let xPos3=130

//unicorn horn
let xPos4=245
let xPos5=275
let xPos6=305
let xPos7=300

//unicorn head
let xPos8=190

//unicorn eyes
let xPos9=215
let xPos10=264

//unicorn inner eyes
let xPos11=215
let xPos12=264

//unicorn mouth
let xPos13=240

//unicorn teeth
let xPos14=230
let xPos15=250

//unicorn body 
let xPos16=155

//unicorn legs
let xPos17=130
let xPos18=130
let xPos19=130
let xPos20=90
let xPos21=170
let xPos22=265
let xPos23=265
let xPos24=265
let xPos25=225
let xPos26=305

//unicorn tail
let xPos27=150
let xPos28=50
let xPos29=15
let xPos30=15
let xPos31=50








function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(227, 64, 162);
  
  
  fill(134, 227, 179);
  rect(0,400,500);
  
  //cloud
  fill(100, 188, 232);
  
  rect(xPos,15, 115, 40, 50);
  xPos=xPos+1
  if(xPos>=400)
    { xPos=75 }
  
  rect(xPos2,40,80,30,90);
   xPos2=xPos2+1
  if (xPos2>=375 )
     { xPos2=50}
  
  rect(xPos3,40,80,30,90);
   xPos3=xPos3+1 
  if (xPos3>=455)
    { xPos3=130  }
  
  
  //head
  fill( 197, 151, 222);
  rect(xPos8,160,100);
  xPos8=xPos8+1
  if (xPos8>= 455)
      {xPos8=190}
  
  
  
  //horn
  triangle(xPos4,160,xPos5,160,xPos6,95)
  
  xPos4=xPos4+1
  if (xPos4>=510)
    { xPos4=245}
  
  xPos5=xPos5+1
  if (xPos5>=540)
  { xPos5=275}
  
  xPos6=xPos6+1
  if (xPos6>=570)
    {xPos6=305}
  
  fill(167, 232, 210);
  
  
  ellipse(xPos7,100,40);
  xPos7=xPos7+1
  if (xPos7>=565)
    { xPos7=300}
  
  
  
  
  //eyes
  fill( 245,191,242);
  ellipse(xPos9,190,60);
  xPos9=xPos9+1
  if(xPos9>=480)
  {  xPos9=215}

  
  fill(245,191,242);
  ellipse(xPos10,190,60);
  xPos10=xPos10+1
  if(xPos10>=529)
    {xPos10=264}
  
  //inner eyes
  fill(234, 228, 237);
  ellipse(xPos11,190,40);
  xPos11=xPos11+1
  if (xPos11>=480)
    {xPos11=215}
  
  fill(234, 228, 237);
  ellipse(xPos12,190,40);
  xPos12=xPos12+1
  if (xPos12>=529)
    { xPos12=264}

  
  //mouth
  noFill()
  stroke(245,191,242);
  strokeWeight(5);
   arc(xPos13, 226, 76, 60, 0, PI, PIE);
  xPos13=xPos13+1
  if (xPos13>=505)
    { xPos13=240}

  
   //teeth
  
  fill(234, 228, 237);
  push()
  ellipse(xPos14,240,15,25);
  xPos14=xPos14+1
  if (xPos14>=495)
    { xPos14=230}
  pop()
  
  push()
  ellipse(xPos15,240,15,25);
  xPos15=xPos15+1
  if (xPos15>=515)
      { xPos15=250}
  pop()
  

  
  //body
  fill(197,151,222);
  rect(xPos16,260,100);
  xPos16=xPos16+1
  if (xPos16>=420)
    { xPos16=155}
  
  //legs
  ellipse(xPos17,370,80,50);
  xPos17=xPos17+1
  if (xPos17>=395)
    { xPos17=130}
  push()
  stroke(167, 232, 210);
  strokeWeight(2)
  
  line(xPos18,395,xPos19,345);
  xPos18=xPos18+1
  if (xPos18>=395)
      {xPos18=130}
  
  xPos19=xPos19+1
  if (xPos19>=395)
    { xPos19=130}
  
  line(xPos20,370,xPos21,370);
  xPos20=xPos20+1
  if (xPos20>=355)
    { xPos20=90}
  
  xPos21=xPos21+1
  if (xPos21>=435)
    { xPos21=170}
  
  
  pop()
  
  
  ellipse(xPos22,370,80,50);
  xPos22=xPos22+1
  if (xPos22>=530)
     { xPos22=265}
  
  push()
  stroke(167, 232, 210);
  strokeWeight(2)
  line(xPos23,395,xPos24,345);
       xPos23=xPos23+1
       if (xPos23>=530)
          { xPos23=265}
  xPos24=xPos24+1
  if (xPos24>=530)
    { xPos24=265}
  
  line(xPos25,370,xPos26,370);
       xPos25=xPos25+1
      if (xPos25>=490)
          {xPos25=225}
      
      xPos26=xPos26+1
      if (xPos26>=570)
       { xPos26=305}

  pop()
  
  
  //tail
  push()
  strokeWeight(8);
  line(xPos27, 320, xPos28, 290);
       xPos27=xPos27+1
       if (xPos27>=415)
         { xPos27=150}
       
        xPos28=xPos28+1
        if (xPos28>=315)
          {xPos28=50}
  
  fill(167, 232, 210)
  
  triangle(xPos29,270,xPos30,310,xPos31,290);
           xPos29=xPos29+1
           if( xPos29>=280)
             { xPos29=15}
  
          xPos30=xPos30+1
          if (xPos30>=280)
             {xPos30=15}
  
           xPos31=xPos31+1
           if (xPos31>=315)
             { xPos31=50}
  pop()
  
  //finishline
  push();
  translate(460,400);
  line(0,0,0,-40);
  fill(167, 232, 210);
  triangle(0,-20,30,-25,0,-40);
  
  pop();
  


  
  
  
}

