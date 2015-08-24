import CONFIG from './Config.es6';

// Import states
import Stage1state from './../states/Stage1.es6';

export class Game {
    constructor() {
        this.setup();
    }

    setup() {
        let game = new Phaser.Game(CONFIG.map.width, CONFIG.map.height, Phaser[CONFIG.physics], Phaser[CONFIG.renderer]);

        // Add states
        game.state.add('Boot', this.boot);
        game.state.add('Stage1', Stage1state);

        // Go to Boot state
        game.state.start('Boot');
    }

    boot() {
        return {
            preload() {
                // Preload all assets

                console.clear();
            },

            create() {
                // Setup world enviroment

                // go to Stage1
                this.game.state.start('Stage1');
            }
        }
    }
}
