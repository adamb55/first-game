
var canvas = {
  width  : 800,
  height : 550
};
var ctx;
var gamestate = 0;
var left=false;
var right=false;
var gravity=0.50;
var startlevel;
player.x = 100;
player.y = canvas.height - player.height;
var playb = new Image();
playb.src = "playimg.png";
var img = {
  width:97,
  height:33,
  x:canvas.width/2-(97/2),
  y:canvas.height/2-10
}
  var ss;
  var gameloop;

var mouse = {
  x : null,
  y : null
}
//update rect name and make the img a object
onmousemove = function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;

}

function init(){
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 550;
  ss = setInterval(startscreen, 1000/60);
  setInterval(physics, 1000/60);
  startlevel=true;
}

function startscreen(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "70px Block";
  ctx.fillText("Block Parkour", canvas.width/2-270,canvas.height/2-50);
  ctx.font = "40px Block";
  if(mouse.x>img.x&&mouse.x<img.x+img.width&&mouse.y<img.y+img.height&&mouse.y>img.y){
    ctx.drawImage(playb, canvas.width/2-(103/2), canvas.height/2-13, 103, 39);
  }else{
    ctx.drawImage(playb, canvas.width/2-(97/2), canvas.height/2-10, 97, 33);
  }



}
function handleClick(){
  if(startlevel && mouse.x>img.x&&mouse.x<img.x+img.width&&mouse.y<img.y+img.height&&mouse.y>img.y){
    clearInterval(ss);
    startlevel=false;
    gameloop = setInterval(lvl1tut, 1000/60);
    player.x = 10;
    player.y = canvas.height - player.height;
  }
}

init();
document.addEventListener("click", handleClick);
