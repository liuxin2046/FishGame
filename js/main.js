var cans1;
var cans2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var lastTime;
var deltaTime;
var bgPic = new Image();
var ane;
var fruit;
var mom;
var baby;
var mx;
var my;
document.body.onload = game;
function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();



}
function init(){
    cans1 = document.getElementById("canvas1");
    ctx1 = cans1.getContext("2d");
    cans2 = document.getElementById("canvas2");
    ctx2 = cans2.getContext("2d");
    cans1.addEventListener("mousemove",onMouseMove,false);
    bgPic.src = "src/background.jpg";
    canHeight = cans1.height;
    canWidth = cans1.width;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;
}
function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40) deltaTime = 40;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    Collision();
    baby.draw();
    //console.log(deltaTime);
}
function onMouseMove(e){
    if(e.offSetX || e.layerX){
        //ie:offSetX firefox:layerX
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
        console.log(mx+","+my);
    }
}