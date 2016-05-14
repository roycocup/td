var Cube = function(x,y){
  var x = x;
  var y = y;
  var w = 10 ,h = 10;
  this.sprite = game.add.sprite(x, y, 'cube');
	this.sprite.anchor.set(1);
  this.key = x+y;
}
