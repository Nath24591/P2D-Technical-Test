import { Dimensions, Position, UnitType } from '../constants/types';
import { Sprite } from './Sprite';

export class Shape {
    private sprite: Sprite;

    constructor(
        private type: UnitType,
        private dimensions: Dimensions,
        private position: Position,
        private colour: string,
    ) {
        this.sprite = new Sprite(this);
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): void {
        this.position = position;
    }

    public getType(): UnitType {
        return this.type;
    }

    public getDimensions(): Dimensions {
        return this.dimensions;
    }

    public getColour(): string {
        return this.colour;
    }

    public setColour(colour: string): void {
        this.colour = colour;
    }

    public draw(context: CanvasRenderingContext2D): void {
        this.sprite.draw(context);
    }
}