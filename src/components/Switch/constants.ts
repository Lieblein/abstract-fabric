import sortBy from 'lodash/sortBy';

import { deleteLevel, deleteDepartment, unfire } from '../../actions';
import { departmentJoins, levelAchievements } from '../../constants/data';
import {
    HIRE,
    FIRE,
    DEPARTMENT_CHANGE,
    LEVEL_CHANGE,
    IHireFireAction,
    IDepartmentAction,
    ILevelAction,
    ProfessionAction,
} from './types';
import { ISvgFile } from '../Svg';
const hireIcon = require('../icons/briefcase.svg') as ISvgFile;
const fireIcon = require('../icons/fire.svg') as ISvgFile;
const departmentIcon = require('../icons/loop.svg') as ISvgFile;
const levelIcon = require('../icons/star.svg') as ISvgFile;

export const deleteCallbackMap = new Map([
    [FIRE, unfire],
    [DEPARTMENT_CHANGE, deleteDepartment],
    [LEVEL_CHANGE, deleteLevel],
]);

export const iconMap = new Map([
    [HIRE, hireIcon],
    [FIRE, fireIcon],
    [DEPARTMENT_CHANGE, departmentIcon],
    [LEVEL_CHANGE, levelIcon],
]);

function getActions() {
    const sortedDepartmentJoins = sortBy(departmentJoins, 'from');
    const hireActions: IHireFireAction[] = departmentJoins.length === 0
        ? []
        : [
            {
                id: sortedDepartmentJoins[0].id,
                type: HIRE,
                date: sortedDepartmentJoins[0].from,
                detail: null,
                hasDelete: false,
            },
        ];
    const fireActions: IHireFireAction[] = [];

    const departmentActions: IDepartmentAction[] = sortedDepartmentJoins.map(({
        id,
        from,
        to,
        department,
        comment,
    }, index) => {
        const isLastDepartmentJoin = index === (sortedDepartmentJoins.length - 1);
        const isFireAction = isLastDepartmentJoin && to !== null;
        if (isFireAction) {
            fireActions.push({
                id,
                type: FIRE,
                date: to,
                detail: null,
                hasDelete: true,
            });
        }
        return {
            id,
            type: DEPARTMENT_CHANGE,
            date: from,
            hasDelete: isLastDepartmentJoin && !isFireAction,
            detail: {
                department,
                comment,
            },
        };
    });

    const levelActions: ILevelAction[] = sortBy(levelAchievements, 'achieved.from').map(({
        id,
        achieved: { from: date },
        promoted: { from: promoted },
        level,
        comment,
    }, index) => ({
        id,
        type: LEVEL_CHANGE,
        date,
        hasDelete: index === levelAchievements.length - 1,
        detail: {
            promoted,
            level,
            comment,
        },
    }));

    const actions = (hireActions as ProfessionAction[])
        .concat(fireActions)
        .concat(departmentActions)
        .concat(levelActions);
    return sortBy(actions, 'date');
}

export const actions = getActions();
