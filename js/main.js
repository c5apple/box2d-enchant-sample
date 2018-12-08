(function () {

  enchant();

  window.onload = function () {
    var game = new Core(160, 160);

    // ゲーム素材読み込み
    game.preload({
      map2: './js/enchant.js/images/map2.png',
      icon0: './js/enchant.js/images/icon0.png'
    });

    // 床のクラス
    var Floor = Class.create(PhyBoxSprite, {
      initialize: function (x, y) {
        PhyBoxSprite.call(this, 16, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
        this.image = game.assets.map2;
        this.frame = 0;
        this.x = x;
        this.y = y;
        game.rootScene.addChild(this);
      }
    });

    // 豚キャラのクラス
    var Pig = Class.create(PhyCircleSprite, {
      initialize: function (x, y) {
        PhyCircleSprite.call(this, 8, enchant.box2d.DYNAMIC_SPRITE, 1.5, 1.0, 0.3, true);
        this.image = game.assets.icon0;
        this.frame = 22;
        this.x = x;
        this.y = y;
        game.rootScene.addChild(this);
      }
    });

    //メインループ
    game.onload = function () {
      var world = new PhysicsWorld(0, 9.8);

      // 床の表示
      for (var i = 0; i < 160; i += 16) {
        var floor = new Floor(i, 144);
      }
      // 豚キャラの表示
      var pig = new Pig(10, 40);

      // 物理エンジン処理
      game.rootScene.onenterframe = function () {
        world.step(game.fps);
      }
    }

    game.start();

  }
})();
