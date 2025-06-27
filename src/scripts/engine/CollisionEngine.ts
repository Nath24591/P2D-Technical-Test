import { Shape } from '../Base';
import { UnitType } from '../../constants/types';

export function checkCollisionsWithObstruction(units: Shape[]): void {
    // Find the obstruction
    const obstruction = units.find(
        (unit) => unit.getType() === UnitType.Obstruction
    );

    if (!obstruction) {
        console.warn('No obstruction found in units.');
        return;
    }

    // Loop through all units to check for collision with obstruction unit
    for (const unit of units) {
        // Skip the obstruction
        if (unit === obstruction) continue;

        const isColliding = checkCollision(unit, obstruction);

        if (isColliding) {
            unit.setColour('red');
        } else {
            // Reset the unit to its original colour
            unit.setColour(unit.getOriginalColour());
        }
    }
}

export function checkAllCollisions(units: Shape[]): void {
    const collidingUnits = new Set<Shape>();

    // Loop every unit
    for (let i = 0; i < units.length; i++) {
        const unitA = units[i];

        //Check against every unit that hasent been checked yet
        for (let j = i + 1; j < units.length; j++) {
            const unitB = units[j];

            const isColliding = checkCollision(unitA, unitB);

            if (isColliding) {
                collidingUnits.add(unitA);
                collidingUnits.add(unitB);
            }
        }
    }

    for (const unit of units) {
        if (collidingUnits.has(unit)) {
            unit.setColour('red');
        } else {
            unit.setColour(unit.getOriginalColour());
        }
    }
}

export function checkCollision(A: Shape, B: Shape): boolean {
    const aPos = A.getPosition();
    const aDim = A.getDimensions();
    const bPos = B.getPosition();
    const bDim = B.getDimensions();

    return (
        aPos.x < bPos.x + bDim.width &&
        aPos.x + aDim.width > bPos.x &&
        aPos.z < bPos.z + bDim.depth &&
        aPos.z + aDim.depth > bPos.z
    );
}
