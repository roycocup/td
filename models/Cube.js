var Cube = function(x,y,i){
  var x = x;
  var y = y;
  
  this.sprite = game.add.sprite(x, y, 'cube');
  this.sprite.anchor.set(1);
  this.key = i;

}
