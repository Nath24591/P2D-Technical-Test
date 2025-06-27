import { describe, it, expect } from 'vitest';
import { WashingMachine } from '../scripts/WashingMachine';
import { Fridge } from '../scripts/Fridge';
import {Cooker} from "../scripts/Cooker";

describe('Label Generation', () => {
    it('generates correct label for Washing Machine', () => {
        const wm = new WashingMachine({ width: 100, depth: 100 }, { x: 0, z: 0 }, 'Front Load', 1);
        expect(wm.getLabel()).toEqual(['Washing Machine', 'Front Load']);
    });

    it('generates correct label for Fridge', () => {
        const fridge = new Fridge({ width: 100, depth: 100 }, { x: 0, z: 0 }, 'Fridge/Freezer', 2);
        expect(fridge.getLabel()).toEqual(['Fridge', 'Fridge/Freezer']);
    });

    it('generates correct label for Cooker', () => {
        const fridge = new Cooker({ width: 100, depth: 100 }, { x: 0, z: 0 }, 'No Hob', 2)
        expect(fridge.getLabel()).toEqual(['Cooker', 'No Hob']);
    });
});
