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
        let player1;
        let player2;

        return {
            // Preload all assets
            preload() {
                console.clear();

                this.game.load.image('mario', 'app/assets/images/mario.png', 96, 96);
                this.game.load.image('luigi', 'app/assets/images/luigi.png', 96, 96);
            },

            // Setup world enviroment
            create() {
                this.game.physics.startSystem(Phaser.Physics[CONFIG.physics]);    

                this.game.state.start('Stage1');
            }
        }
    }
}
