'use strict';

import CONFIG from './../engine/Config.es6';

import Player1 from './../models/Player1.es6';
import Player2 from './../models/Player2.es6';

class Stage1 extends Phaser.State {
    preload() {

    }

    create() {
        // Create Player1...
        this.Mario = new Player1(this.game);
        // ...with default keys (arrows)
        this.Mario.setControls();

        // Create Player2...
        this.Luigi = new Player2(this.game);
        // ...with custom keys
        this.Luigi.setControls({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D'
        });

        this.game.physics.enable(this.Mario.getSprite(), Phaser.Physics[CONFIG.physics]);
        this.game.physics.enable(this.Luigi.getSprite(), Phaser.Physics[CONFIG.physics]);
    }

    update() {
        this.Mario.updateMove(this.Mario.getControls());
        this.Luigi.updateMove(this.Luigi.getControls());
    }
}

export default Stage1;
