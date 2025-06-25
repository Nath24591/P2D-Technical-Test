import { Shape } from './Base';
import { Dimensions, Position } from '../constants/types';

export class Sprite {
    private readonly colour: string;
    private readonly dimensions: Dimensions;
    private readonly position: Position;

    constructor(shape: Shape) {
        this.colour = shape.getColour();
        this.position = shape.getPosition();
        this.dimensions = shape.getDimensions();
    }

    public draw(context: CanvasRenderingContext2D): void {
        console.log(this);

        const { width, depth } = this.dimensions;
        const { x, z } = this.position;

        context.save();

        context.fillStyle = this.colour;
        context.fillRect(x, z, width, depth);
        context.strokeRect(x, z, width, depth)
        
        context.restore();
    }
}