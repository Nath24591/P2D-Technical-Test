import { Shape } from '../scripts/Base';
import { WashingMachine } from '../scripts/WashingMachine';
import { Fridge } from '../scripts/Fridge';
import { Cooker } from '../scripts/Cooker';
import { colourPalette } from './colourPalette';
import { UnitType } from './types';

export const DATA = [
    // Obstruction
    new Shape(
        UnitType.Obstruction,
        { width: 100, depth: 60 },
        { x: 270, z: 250 },
        colourPalette.units.obstruction,
        1
    ),

    // Base Units
    new Shape(
        UnitType.Base,
        { width: 100, depth: 150 },
        { x: 220, z: 250 },
        colourPalette.units.baseUnit,
        2
    ),
    new Shape(
        UnitType.Base,
        { width: 70, depth: 100 },
        { x: 550, z: 500 },
        colourPalette.units.baseUnit,
        3
    ),

    // Washing Machine
    new WashingMachine(
        { width: 80, depth: 80 },
        { x: 400, z: 200 },
        'Front Load',
        4
    ),

    // Fridge
    new Fridge(
        { width: 70, depth: 70 },
        { x: 500, z: 300 },
        'Fridge/Freezer',
        5
    ),

    new Cooker(
        { width: 70, depth: 70 },
        { x: 580, z: 120 },
        'Top Hob',
        5
    ),
];
