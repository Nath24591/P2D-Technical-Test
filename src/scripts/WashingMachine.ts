import { ApplianceUnit } from './ApplianceUnit';
import { Dimensions, Position } from '../constants/types';
import { colourPalette } from '../constants/colourPalette';

export class WashingMachine extends ApplianceUnit {
    private loadType: 'Front Load' | 'Top Load';

    constructor(
        dimensions: Dimensions,
        position: Position,
        loadType: 'Front Load' | 'Top Load',
        id?: number
    ) {
        super('Washing Machine', dimensions, position, colourPalette.units.washingMachine, id);
        this.loadType = loadType;
    }

    public getLoadType(): 'Front Load' | 'Top Load' {
        return this.loadType;
    }

    public getLabel(): string[] {
        return [this.getApplianceType(), this.getLoadType()];
    }
}
