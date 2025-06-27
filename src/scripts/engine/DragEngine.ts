import { Shape } from '../Base';
import { Renderer } from './Renderer';

interface Position {
    x: number;
    z: number;
}

export class DragEngine {
    private draggingShape: Shape | null = null;
    private dragOffset: Position = { x: 0, z: 0 };

    constructor(
        private canvas: HTMLCanvasElement,
        private shapes: Shape[],
        private renderer: Renderer
    ) {
        this.initListeners();
    }

    private initListeners(): void {
        this.canvas.addEventListener('mousedown', this.onMouseDown);
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);
    }

    private onMouseDown = (e: MouseEvent) => {
        const mouse = this.getMousePos(e);

        const shape = this.shapes.find((s) => this.isPointInsideShape(mouse, s));

        if (shape) {
            this.draggingShape = shape;
            const pos = shape.getPosition();
            this.dragOffset = {
                x: mouse.x - pos.x,
                z: mouse.z - pos.z
            };
        }
    };

    private onMouseMove = (e: MouseEvent) => {
        if (!this.draggingShape) return;

        const mouse = this.getMousePos(e);

        const { width, depth } = this.draggingShape.getDimensions();

        let newX = mouse.x - this.dragOffset.x;
        let newZ = mouse.z - this.dragOffset.z;

        newX = Math.max(0, Math.min(newX, this.canvas.width - width));
        newZ = Math.max(0, Math.min(newZ, this.canvas.height - depth));

        this.draggingShape.setPosition({ x: newX, z: newZ });

        this.renderer.update();
    };

    private onMouseUp = () => {
        this.draggingShape = null;
    };

    private getMousePos(event: MouseEvent): Position {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            z: event.clientY - rect.top
        };
    }

    private isPointInsideShape(point: Position, shape: Shape): boolean {
        const { x, z } = shape.getPosition();
        const { width, depth } = shape.getDimensions();

        return (
            point.x >= x &&
            point.x <= x + width &&
            point.z >= z &&
            point.z <= z + depth
        );
    }
}
