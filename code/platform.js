class Platform {

  constructor(px,py,pwidth,ctype) {
    this.px = px;
    this.py = py;
    this.pwidth = pwidth;
    this.ctype = ctype;
  }

  show() {
    if(this.ctype===1){
      ctx.fillStyle = "#a4f8fc";
    }else if(this.ctype===2){
      ctx.fillStyle = "blue";
    }
    ctx.fillRect(this.px,this.py,this.pwidth,7.5);
  }
  collision(){
    if(player.y+player.height>=this.py && (!(player.y+player.height>=this.py+10) || !(player.y+
  player.height>=this.py+20) && player.yv>=10) &&
     player.x+player.width>this.px && !(player.x>this.px+this.pwidth) && player.yv>0){
      player.jumping=false;
      player.resting = true;
      player.y = this.py-player.height;
      player.yv=0;
    }
  }
  bcollision(){
    if(player.y+player.height>=this.py && !(player.y+player.height>=this.py+10) &&
     player.x+player.width>this.px && !(player.x>this.px+this.pwidth) && player.yv>0){
      player.yv=-player.yv*0.9;
    }
  }



}
