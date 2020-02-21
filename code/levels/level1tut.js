function lvl1tut(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font = "40px Block";
  ctx.fillStyle= "white";
  ctx.fillText("Level 1", 10,40);
  ctx.font = "20px Block";
  ctx.fillText("Get to the green platform!", 250,317);
  ctx.fillRect(player.x,player.y, player.width, player.height);
  ctx.fillStyle = "#6bf442";
  ctx.fillRect(727,356, 100, 7.5);

  if (player.x < 727 + 100 &&
   player.x + player.width > 727 &&
   player.y < 356 + 7.5 &&
   player.y + player.height > 356) {
    clearInterval(gameloop);
    gameloop = setInterval(lvl2tut, 1000/60);
    player.x = 0;
    player.y = 246 - player.height;
  }

  tut1plat1.show();
  tut1plat2.show();
  tut1plat1.collision();
  tut1plat2.collision();





}
var tut1plat1 = new Platform(168,468,200,1);
var tut1plat2 = new Platform(468,413,200,1);
