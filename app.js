var game;
var tdWoldBounds = {width:400, heigth:400}
var screen = {x: 600, y: 600};
var total_cubes = 20*20;
// var screen = {x: world_geom.maxX, y: world_geom.maxY};
function init(){
  game = new Phaser.Game(screen.x, screen.y, Phaser.AUTO, 'gamecanvas',{preload:preload,create:create,update:update,render:render});
}
init();

function preload(){
  game.load.image('cube', 'cube.png');
};

var cubes = [];
function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  createCubes();
};

function update() {}

function render() {

}


var createRoads = function(){
  var x = game.rnd.between(0, 20);
  var y = 0;
  while(y <= 20){
    var cube = getCube(x+y);
    cube.sprite.destroy();
    y++;
  }
}


var getCube(key){
  for(i in cubes){
    if (cubes[i].key == key)
      return cube;
  }
}

var createCubes = function(){
  var x = 0, y = 0;
  for (var i = 0; i < total_cubes-1; i++) {
    x += 20;
    if (x >= tdWoldBounds.width){
      x = 0;
      y += 20;
    }
    cubes.push(new Cube(x,y));
  }
}

var Cube = function(x,y){
  var x = x;
  var y = y;
  var w = 10 ,h = 10;
  this.sprite = game.add.sprite(x, y, 'cube');
	this.sprite.anchor.set(1);
  this.key = x+y;
}
