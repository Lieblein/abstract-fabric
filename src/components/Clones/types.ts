export const HIRE = 'hire';
export const FIRE = 'fire';
export const DEPARTMENT_CHANGE = 'department-change';
export const LEVEL_CHANGE = 'level-change';

export type ProfessionActionType =
    typeof HIRE
    | typeof FIRE
    | typeof DEPARTMENT_CHANGE
    | typeof LEVEL_CHANGE;

export interface IAction<EntityType> {
    id: number;
    type: ProfessionActionType;
    date: string;
    entity: EntityType;
}
