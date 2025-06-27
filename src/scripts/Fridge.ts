import { ApplianceUnit } from './ApplianceUnit';
import { Dimensions, Position } from '../constants/types';
import { colourPalette } from '../constants/colourPalette';

export class Fridge extends ApplianceUnit {
    private readonly fridgeType: 'Fridge' | 'Fridge/Freezer';

    constructor(
        dimensions: Dimensions,
        position: Position,
        fridgeType: 'Fridge' | 'Fridge/Freezer',
        id?: number
    ) {
        super('Fridge', dimensions, position, colourPalette.units.fridge, id);
        this.fridgeType = fridgeType;
    }

    public getFridgeType(): 'Fridge' | 'Fridge/Freezer' {
        return this.fridgeType;
    }

    public getLabel(): string[] {
        return [this.getApplianceType(), this.getFridgeType()];
    }
}
