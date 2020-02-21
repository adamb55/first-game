var player = {

  x : null,
  y : null,
  xv     : 0,
  yv     : 0,
  width  : 20,
  height : 40,
  left   : false,
  right  : false,
  up     : false,
  jumping: false,
  resting: false,
  keyListener : function(e){

    var keystate = (e.type=="keydown")?true:false;

    switch(e.keyCode){

      case 37:
        this.left = keystate;
        break;
      case 38:
        this.up = keystate;
        break;
      case 39:
        this.right = keystate;
        break;

    }

  }


};
window.addEventListener("keydown", player.keyListener);
window.addEventListener("keyup", player.keyListener);
