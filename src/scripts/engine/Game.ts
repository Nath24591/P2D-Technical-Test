import { Renderer } from './Renderer';
import { Shape } from '../Base';
import { DATA } from '../../constants/data';

export class Game {
    private renderer: Renderer;
    private shapes: Shape[] = [
        ...DATA.map(({type, dimensions, position, colour}) => {
            return new Shape(type, dimensions, position, colour)
        })
    ];

    public init(): void {
        this.renderer = new Renderer(this.shapes);
        this.renderer.init();

        this.gameLoop();
    }

    private gameLoop(): void {
        // Update renders
        this.renderer.update();

        requestAnimationFrame(() => this.gameLoop());
    }
}
