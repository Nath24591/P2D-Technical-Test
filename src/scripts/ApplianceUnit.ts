import { Shape } from './Base';
import { Dimensions, Position, UnitType } from '../constants/types';

export class ApplianceUnit extends Shape {
    constructor(
        private applianceType: string,
        dimensions: Dimensions,
        position: Position,
        colour: string,
        id?: number
    ) {
        super(UnitType.Appliance, dimensions, position, colour, id);
    }

    public getApplianceType(): string {
        return this.applianceType;
    }

    public getLabel(): string[] {
        return [this.getApplianceType()];
    }
}
