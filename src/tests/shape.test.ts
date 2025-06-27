import { describe, it, expect } from 'vitest';
import { Shape } from '../scripts/Base';
import { UnitType } from '../constants/types';

describe('Shape Behaviour', () => {
    it('gets and sets position correctly', () => {
        const shape = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 0, z: 0 }, 'blue');
        shape.setPosition({ x: 50, z: 50 });
        expect(shape.getPosition()).toEqual({ x: 50, z: 50 });
    });

    it('returns correct colour', () => {
        const shape = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 0, z: 0 }, 'blue');
        expect(shape.getColour()).toBe('blue');
    });

    it('returns original colour', () => {
        const shape = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 0, z: 0 }, 'blue');
        shape.setColour('red');
        expect(shape.getOriginalColour()).toBe('blue');
    });
});
