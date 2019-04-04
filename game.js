var canvas = document.getElementById('canvas'),
    cw = canvas.width,
    ch = canvas.height,
    cx = null,
    fps = 30,
    bX = 30,
    bY = 30,
    mX = 10,
    mY = 20;

function gameLoop() {
    cx.clearRect(0,0,cw,cw);
    
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(bX, bY, 20, 0, Math.PI * 360);
    cx.fill();
    if(bX >= cw || bX <= 0) { mX*=-1; }
    if(bY >= ch || bY <= 0) { mY*=-1; }
    
    bX+=mX;
    bY+=mY;
}

if (typeof (canvas.getContext) !== undefined) {
    cx = canvas.getContext('2d');

    setInterval(gameLoop, 1000 / fps);
}
