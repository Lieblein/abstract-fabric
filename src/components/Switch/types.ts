export const HIRE = 'hire';
export const FIRE = 'fire';
export const DEPARTMENT_CHANGE = 'department-change';
export const LEVEL_CHANGE = 'level-change';

export type ProfessionActionType =
    typeof HIRE
    | typeof FIRE
    | typeof DEPARTMENT_CHANGE
    | typeof LEVEL_CHANGE;

interface IAction<DetailType> {
    id: number;
    type: ProfessionActionType;
    date: string;
    detail: DetailType;
    hasDelete: boolean;
}

export interface IHireFireAction extends IAction<null> {
    type: typeof HIRE | typeof FIRE;
}

interface IDepartmentDetail {
    department: number;
    comment: string;
}

export interface IDepartmentAction extends IAction<IDepartmentDetail> {
    type: typeof DEPARTMENT_CHANGE;
}

interface ILevelDetail {
    level: number;
    promoted: string;
    comment: string;
}

export interface ILevelAction extends IAction<ILevelDetail> {
    type: typeof LEVEL_CHANGE;
}

export type ProfessionAction = IHireFireAction | IDepartmentAction | ILevelAction;
