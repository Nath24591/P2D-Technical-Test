import { ShapeConfig, UnitType } from './types';
import { colourPalette } from './colourPalette';

export const BASE_UNITS: ShapeConfig[] = [
    {
        id: 1,
        position: {
            x: 250,
            z: 250,
        },
        type: UnitType.Base,
        dimensions: {
            width: 100,
            depth: 150,
        },
        colour: colourPalette.units.baseUnit,
    },
    {
        id: 2,
        position: {
            x: 550,
            z: 500,
        },
        type: UnitType.Base,
        dimensions: {
            width: 70,
            depth: 100,
        },
        colour: colourPalette.units.baseUnit,
    },
];

export const OBSTRUCTIONS: ShapeConfig[] = [
    {
        id: 4,
        position: {
            x: 270,
            z: 250,
        },
        type: UnitType.Base,
        dimensions: {
            width: 100,
            depth: 60,
        },
        colour: colourPalette.units.obstruction,
    },
];
export const DATA: ShapeConfig[] = [
    ...BASE_UNITS,
    ...OBSTRUCTIONS,
];
