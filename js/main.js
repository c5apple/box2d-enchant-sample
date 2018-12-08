(function () {

  enchant();

  window.onload = function () {
    var game = new Core();

    game.onload = function () {
      console.log('hello world.');

      // 物理エンジン利用
      var world = new PhysicsWorld(0, 9.8);
      game.rootScene.onenterframe = function () {
        world.step(game.fps);
      };
    }
    game.start();
  }
})();
