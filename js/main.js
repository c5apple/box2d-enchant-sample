(function () {

  enchant();

  window.onload = function () {

    var game = new Core(320, 320);

    // メインループ
    game.onload = function () {

      // 物理エンジン利用
      var world = new PhysicsWorld(0, 9.8);

      /*
       * PhyBoxSprite(幅, 高さ, 動作モード, 密度, 摩擦力, 反発力, フラグ)
       */

      // 床の作成
      var floor = new PhyBoxSprite(320, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
      floor.backgroundColor = "#aaa";
      floor.position = {
        x: 160,
        y: 312
      }
      game.rootScene.addChild(floor);

      // 四角形の作成
      var addBox = function () {
        var box = new PhyBoxSprite(32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.3, true);
        box.backgroundColor = "red";
        box.position = {
          x: 100,
          y: 50
        }
        game.rootScene.addChild(box);
      }
      addBox();

      // 物理エンジン処理
      game.rootScene.onenterframe = function () {
        world.step(game.fps);
      }
    }

    game.start();

  }
})();
