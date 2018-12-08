(function () {

  enchant();

  window.onload = function () {
    var game = new Core();

    game.onload = function () {
      console.log('hello world.');
    }
    game.start();
  }
})();
