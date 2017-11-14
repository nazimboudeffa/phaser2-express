var Game = {};

Game.init = function(){
  console.log("init");
};

Game.preload = function() {
  console.log("preload");
};

Game.create = function(){
  console.log("create");
};

var game = new Phaser.Game(24*32, 17*32, Phaser.AUTO, document.getElementById('game'));
game.state.add('Game',Game);
game.state.start('Game');
