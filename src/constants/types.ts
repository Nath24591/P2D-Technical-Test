export enum UnitType {
    Base = 'Base',
    Appliance = 'Appliance',
    Obstruction = 'Obstruction',
}

export interface Position {
    x: number;
    z: number;
}

export interface Dimensions {
    width: number;
    depth: number;
}