var game;
var Dim = {
  stage : {x: 600, y: 600},
  screen : {x: 600, y: 600},
}
Dim.game = {x:0, y:0, w:Dim.stage.x, h:(Dim.stage.y/12)*7};
Dim.menu = {x:-1, y:Dim.game.h, w:Dim.stage.x, h:Dim.stage.y};

var total_cubes = 558;
// var screen = {x: world_geom.maxX, y: world_geom.maxY};
function init(){
  game = new Phaser.Game(Dim.screen.x, Dim.screen.y, Phaser.AUTO, 'gamecanvas',{preload:preload,create:create,update:update,render:render});
}
init();

function preload(){
  game.stage.backgroundColor = '#337799';
  game.load.image('cube', 'assets/cube.png');
  game.load.image('menu', 'assets/menu.png');
};

var cubes = [];
var menu;
function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  menu = game.add.image(Dim.menu.x, Dim.menu.y, 'menu');
  menu.width = menu.width + 1; // some problem with the menu missing a pixel... :(
  createCubes();
  createRoad();
  //game.input.onDown.add(unpause, self);
};

function update(){}

function render() {}

function unpause(event){
        // Only act if paused
        if(game.paused){
            // Calculate the corners of the menu
            var x1 = w/2 - 270/2, x2 = w/2 + 270/2,
                y1 = h/2 - 180/2, y2 = h/2 + 180/2;

            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);
                //choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
            }
            else{
                menu.destroy();
                choiseLabel.destroy();
                game.paused = false;
            }
        }
    };


var createRoad = function(){
  // cube at the top to start a road at.
  // Select one of the first cubes at x
  var x = Math.round(game.rnd.between(0, Dim.game.w)/20);
  console.log(x);
  var y = 0;
  while(y <= Dim.game.h){
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
  var x = Dim.game.x;
  var y = Dim.game.y;
  for (var i = 0; i < total_cubes-1; i++) {
    x += 20;
    if (x > Dim.game.w){
      x = 0;
      y += 20;
    }
    cubes.push(new Cube(x,y));
  }
}
