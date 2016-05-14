var game;
var Dim = {
  stage : {x: 600, y: 600},
  screen : {x: 600, y: 600},
}
Dim.game = {x:0, y:0, w:Dim.stage.x, h:(Dim.stage.y/12)*7};
Dim.menu = {x:-1, y:Dim.game.h, w:Dim.stage.x, h:Dim.stage.y};

var total_cubes = 20*20;
// var screen = {x: world_geom.maxX, y: world_geom.maxY};
function init(){
  game = new Phaser.Game(Dim.screen.x, Dim.screen.y, Phaser.AUTO, 'gamecanvas',{preload:preload,create:create,update:update,render:render});
}
init();

function preload(){
  game.load.image('cube', 'assets/cube.png');
  game.load.image('menu', 'assets/menu.png');
};

var cubes = [];
var menu;
function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  menu = game.add.image(Dim.menu.x, Dim.menu.y, 'menu');
  menu.width = menu.width + 1; // some problem with the menu missing a pixel... :(
  // createCubes();
};

function update(){}

function render() {

  // game.debug.geom(new Phaser.Rectangle(Dim.game.x, Dim.game.y, Dim.game.w, Dim.game.h), 'lightgreen' );
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
    if (x >= Dim.game.w){
      x = 0;
      y += 20;
    }
    cubes.push(new Cube(x,y));
  }
}
