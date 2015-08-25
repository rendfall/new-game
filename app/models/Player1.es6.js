import AbstractPlayer from './AbstractPlayer.es6';

class Player1 extends AbstractPlayer {
    constructor(game) {
        super(game);

        this.setup({
            name: 'Mario',
            sprite: 'mario',
            startPos: [0, 0],
            moveBy: { 
                left: 5,
                right: 5,
                up: 3.5,
                down: 3.5
            }
        });
    }

    setControls(keys) {
        this._cursors = this.game.input.keyboard.createCursorKeys();

        // Config keys if needed
        if (keys) {
            this._cursors.up = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.up]);
            this._cursors.down = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.down]);
            this._cursors.left = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.left]);
            this._cursors.right = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.right]);
        }
    }

    getControls() {
        return this._cursors;
    }
}

export default Player1;
