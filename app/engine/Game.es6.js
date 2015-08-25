import CONFIG from './Config.es6';

// Import states
import Stage1State from './../states/Stage1.es6';

export class Game {
    constructor() {
        this.setup();
    }

    setup() {
        let game = new Phaser.Game(
            CONFIG.map.width, 
            CONFIG.map.height, 
            Phaser[CONFIG.physics], 
            CONFIG.container, 
            Phaser[CONFIG.renderer]
        );

        // Add states
        game.state.add('Boot', this.boot);
        game.state.add('Stage1', Stage1State);

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

                // After all - go to Stage1
                this.game.state.start('Stage1');
            }
        }
    }
}
