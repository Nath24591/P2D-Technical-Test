import { Dimensions, Position, UnitType } from '../constants/types';
import { Sprite } from './Sprite';

export class Shape {
    private sprite: Sprite;
    private originalColour: string;

    constructor(
        private type: UnitType,
        private dimensions: Dimensions,
        private position: Position,
        private colour: string,
        private id?: number,
    ) {
        this.originalColour = colour;
        this.sprite = new Sprite(this);
    }

    public getId(): number | undefined {
        return this.id;
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

    public getOriginalColour(): string {
        return this.originalColour;
    }

    public draw(context: CanvasRenderingContext2D): void {
        this.sprite.draw(context);
    }

    public getLabel(): string[] {
        return [this.getType()];
    }
}
