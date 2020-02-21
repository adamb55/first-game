
up=false;
function physics(){

  player.x -= player.xv;

  if(player.xv <0){
    player.xv+=0.50;
  }
  if(player.xv >0){
    player.xv-=0.50;
  }

  if(left && player.xv < 3) {
		player.xv += 1;
	}
	if(right && player.xv > -3) {
		player.xv -= 1;
	}
  if(player.y<=canvas.height-player.height ||
     player.resting == false && !(player.y>=canvas.height-player.height)){
    player.yv+=gravity;
    player.y+=player.yv;
    player.resting = true;
  }else{
    player.yv=0;
    player.y=canvas.height-player.height;
    player.jumping = false;
    player.resting = true;
  }
  if(up && player.jumping == false && player.resting == true){
    player.yv = -10;
    player.jumping = true;
  }
  if(player.x>=canvas.width-player.width){
    player.x=canvas.width-player.width;
  }
  if(player.x<=0){
    player.x=0;
  }

}
function jump(){
    player.yv= -10;
}
