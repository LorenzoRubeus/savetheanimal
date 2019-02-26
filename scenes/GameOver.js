class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: "GameOver" });
  }

  init(data) {}
  preload() {
    this.load.image("backgroundGameOver", "assets/backgroundGameOver.png");
    this.load.bitmapFont(
      "fontGameOver",
      "assets/fonts/fontGameOver.png",
      "assets/fonts/fontGameOver.fnt"
    );
  }

  create(data) {
    var background = this.add.image(0, 0, "backgroundGameOver").setOrigin(0, 0);
    this.add.bitmapText(145, 240, "fontGameOver", `Game Over`, 80);
    if (data - 10 >= 100) {
      this.add.bitmapText(145, 300, "fontGameOver", `Score: ${data - 10}`, 80);
    } else {
      this.add.bitmapText(162, 300, "fontGameOver", `Score: ${data - 10}`, 80);
    }
  }
}

export default GameOver;
