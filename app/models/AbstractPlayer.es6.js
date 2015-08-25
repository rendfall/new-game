class AbstractPlayer {
    constructor(game) {
        this.game = game;
    }

    getSprite() {
        return this._sprite;
    }

    getName() {
        return this._name;
    }

    setup(params) {
        this._name = params.name;
        this._moveBy = params.moveBy;
        this._sprite = this.game.add.sprite(params.startPos[0], params.startPos[1], params.sprite);
    }

    updateMove(cursors) {
        //let body = this.getSprite().body;
        // Set keys events
        if (cursors.up.isDown) {
            this._sprite.body.y -= this._moveBy.up;
        }

        if (cursors.down.isDown) {
            this._sprite.body.y += this._moveBy.down;
        }

        if (cursors.left.isDown) {
            this._sprite.body.x -= this._moveBy.left;
        }

        if (cursors.right.isDown) {
            this._sprite.body.x += this._moveBy.right;
        }
    }
}

export default AbstractPlayer;