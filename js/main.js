(function () {

  enchant();

  window.onload = function () {

    var game = new Core(320, 320);

    // 四角形のクラス
    var Box = Class.create(PhyBoxSprite, {
      initialize: function (x, y) {
        PhyBoxSprite.call(this, 32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 1.0, 0.4, true);
        this.backgroundColor = "red";
        this.x = x;
        this.y = y;
        game.rootScene.addChild(this);
        /**
         * クリックイベント
         */
        this.ontouchstart = function () {

          /*
           * applyImpulse(new b2Vec2(横方向の力, 縦方向の力))
           */

           this.applyImpulse(new b2Vec2(15, -10));
        }
      }
    });

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

      // 壁の作成
      var floor = new PhyBoxSprite(16, 320, enchant.box2d.STATIC_SPRITE, 0, 0.2, 0.5, false);
      floor.backgroundColor = "#aaa";
      floor.position = {
        x: 312,
        y: 160
      }
      game.rootScene.addChild(floor);

      // 四角形の表示
      var box = new Box(50, 100);

      // 物理エンジン処理
      game.rootScene.onenterframe = function () {
        world.step(game.fps);
      }
    }

    game.start();

  }
})();
