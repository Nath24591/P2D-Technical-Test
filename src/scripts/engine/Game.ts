import { Renderer } from './Renderer';
import { Shape } from '../Base';
import { DATA } from '../../constants/data';
import { checkCollisionsWithObstruction, checkAllCollisions } from './CollisionEngine';
import { DragEngine } from './DragEngine';

export class Game {
    private renderer: Renderer;
    private shapes: Shape[] = [...DATA];
    private dragEngine: DragEngine;

    public init(): void {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.renderer = new Renderer(this.shapes);
        this.renderer.init();

        this.dragEngine = new DragEngine(canvas, this.shapes, this.renderer);

        this.gameLoop();
    }

    private gameLoop(): void {

        // Singluar obstruction check
        checkCollisionsWithObstruction(this.shapes);

        // Multiple obstruction check
        // checkAllCollisions(this.shapes);
        // Update renders
        this.renderer.update();

        requestAnimationFrame(() => this.gameLoop());
    }
}
