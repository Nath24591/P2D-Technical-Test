import { ApplianceUnit } from './ApplianceUnit';
import { Dimensions, Position } from '../constants/types';
import { colourPalette } from '../constants/colourPalette';

export class Cooker extends ApplianceUnit {
    private readonly cookerType: 'Top Hob' | 'No Hob';

    constructor(
        dimensions: Dimensions,
        position: Position,
        cookerType: 'Top Hob' | 'No Hob',
        id?: number
    ) {
        super('Cooker', dimensions, position, colourPalette.units.cooker, id);
        this.cookerType = cookerType;
    }

    public getCookerType(): 'Top Hob' | 'No Hob' {
        return this.cookerType;
    }

    public getLabel(): string[] {
        return [this.getApplianceType(), this.getCookerType()];
    }
}