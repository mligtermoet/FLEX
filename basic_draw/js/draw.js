let textHere = document.getElementById('textHere');// display data

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

canvas1.style.zIndex = 2;
canvas1.width = screen.width;
canvas1.height = screen.height;
canvas1.style.zIndex = 2;
ctx1.translate(screen.width, 0); // flip screen horizontal
ctx1.scale(-1, 1); // flip screen horizontal

ctx1.lineJoin = 'round';
ctx1.lineCap = 'round';
ctx1.lineWidth = 5;
ctx1.strokeStyle = '#ac0000';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const clearDrawing =() => {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
}

canvas2.addEventListener('mousedown', () => isDrawing = true);
canvas2.addEventListener('mouseup', () => isDrawing = false);

function drawPosenet(XY) {
  //XY = object   { x: value, y: value }
  textHere.innerHTML= Math.floor(XY.x) + " " + Math.floor(XY.y);
  

  // stop the function if not mouse down
  if(!isDrawing) return;
  draw(XY.x,XY.y);
  
  
}

function draw(x,y){
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);
  ctx1.beginPath();
  ctx1.fillStyle = "pink";
  ctx1.arc(x,y,30,0,Math.PI*2);
  ctx1.stroke();
  ctx1.fill();
}



