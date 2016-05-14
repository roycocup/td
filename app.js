var game;
var Dim = {
  stage : {x: 600, y: 600},
  game :  {x:0, y:0, width:400, heigth:400},
  screen : {x: 600, y: 600},
}
//centering the game on the stage
Dim.game.x = (Dim.stage.x/6);


var total_cubes = 20*20;
// var screen = {x: world_geom.maxX, y: world_geom.maxY};
function init(){
  game = new Phaser.Game(Dim.screen.x, Dim.screen.y, Phaser.AUTO, 'gamecanvas',{preload:preload,create:create,update:update,render:render});
}
init();

function preload(){
  game.load.image('cube', 'assets/cube.png');
};

var cubes = [];
function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  // createCubes();
};

function update() {}

function render() {
  // var rect = new Phaser.Rectangle( 100, 100, 100, 100 ) ;
  // game.debug.geom( rect, 'rgba(255,0,0,1)' ) ;
  var rect = new Phaser.Rectangle(Dim.game.x, Dim.game.y, Dim.game.width, Dim.game.heigth);
  game.debug.geom(rect, 'lightgreen' );
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


var getCube = function(key){
  for(i in cubes){
    if (cubes[i].key == key)
      return cube;
  }
}

var createCubes = function(){
  var x = Dim.game.x, y = Dim.game.y;
  for (var i = 0; i < total_cubes-1; i++) {
    x += 20;
    if (x >= Dim.game.width){
      x = 0;
      y += 20;
    }
    cubes.push(new Cube(x,y));
  }
}
