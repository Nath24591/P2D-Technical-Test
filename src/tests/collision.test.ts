import { describe, it, expect } from 'vitest';
import { UnitType } from '../constants/types';
import { Shape } from '../scripts/Base';
import { checkCollision } from '../scripts/engine/CollisionEngine';

describe('Collision Detection', () => {
    it('detects collision when shapes overlap', () => {
        const shapeA = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 0, z: 0 }, 'blue');
        const shapeB = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 50, z: 50 }, 'blue');

        const result = checkCollision(shapeA, shapeB);

        expect(result).toBe(true);
    });

    it('does not detect collision when shapes are far apart', () => {
        const shapeA = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 0, z: 0 }, 'blue');
        const shapeB = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 500, z: 500 }, 'blue');

        const result = checkCollision(shapeA, shapeB);

        expect(result).toBe(false);
    });

    it('detects collision when edges are just touching', () => {
        const shapeA = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 0, z: 0 }, 'blue');
        const shapeB = new Shape(UnitType.Base, { width: 100, depth: 100 }, { x: 100, z: 0 }, 'blue');

        const result = checkCollision(shapeA, shapeB);

        expect(result).toBe(false); // touching edges does NOT count as collision
    });

    it('detects collision when one shape is fully inside another', () => {
        const outer = new Shape(UnitType.Base, { width: 200, depth: 200 }, { x: 0, z: 0 }, 'blue');
        const inner = new Shape(UnitType.Base, { width: 50, depth: 50 }, { x: 50, z: 50 }, 'blue');

        const result = checkCollision(outer, inner);

        expect(result).toBe(true);
    });
});
