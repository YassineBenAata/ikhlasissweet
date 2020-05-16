console.log("x");
var canvas = document.getElementById('myCanvas'),
    c     = canvas.getContext('2d'),
    n     =100, //number of segments
    
    x,y,
    percentX, percentY, // between 0 and 1
    mathX, mathY,
    // MATH "WINDOW"
    xmin=-10,
    xmax=10,
    ymin=-10,
    ymax=10;

// Draw a blue line.
drawCurve();

function drawCurve(){
  c.beginPath();
  for(var i = 0; i < n; i++) {
    percentX=i/(n-1);
    
    mathX=percentX * (xmax-xmin)+xmin;
    mathY=Math.sin(mathX);  
    
    percentY=(mathY - ymin)/(ymax-ymin);
    
    x=percentX * canvas.width;
    y=percentY * canvas.height;
    c.lineTo(x, y);
  } 
  c.stroke();
}  

