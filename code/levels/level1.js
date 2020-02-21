var lvl1plat2 = new Platform(60,456,50,1);
var lvl1bplat = new Platform(259,252,60,2);
var lvl1plat3 = new Platform(402,159,800-402,1);
var lvl1plat4 = new Platform(188,370,80,1);
var lvl1plat5 = new Platform(40,279,100,1);
var lvl1plat6 = new Platform(126,192,50,1);

function lvl1(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font = "40px Block";
  ctx.fillStyle= "white";
  ctx.fillText("Level 1", 10,40);
  ctx.fillRect(player.x,player.y, player.width, player.height);
  ctx.fillStyle = "#a4f8fc";
  ctx.fillRect(402, 159, 7.5, canvas.height);
  if(player.x>402-player.width && player.y>159+player.height){
    player.x=402-player.width;
  }
  lvl1plat2.show();
  lvl1bplat.show();
  lvl1plat3.show();
  lvl1plat4.show();
  lvl1plat5.show();
  lvl1plat6.show();
  lvl1plat2.collision();
  lvl1plat3.collision();
  lvl1plat4.collision();
  lvl1bplat.bcollision();
  lvl1plat5.collision();
  lvl1plat6.collision();



}
