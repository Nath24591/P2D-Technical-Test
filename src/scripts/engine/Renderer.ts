import { Shape } from '../Base';

export class Renderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(private shapes: Shape[]) {}

    public init(): void {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;

        if (!canvas) {
            throw new Error('canvas element has not loaded.');
        }

        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        if (!context) {
            throw new Error('2d context does not exist.');
        }

        this.canvas = canvas;
        this.context = context;
    }

    public update(): void {
        // Clear screen
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Redraw
        this.draw();
    }

    private draw(): void {
        for (const shape of this.shapes) {
            shape.draw(this.context);
        }
    }
}