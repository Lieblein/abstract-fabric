import sortBy from 'lodash/sortBy';

import { departmentJoins, levelAchievements } from '../../constants/data';
import { IDepartmentJoin } from '../../types/department';
import { ILevelAchievement } from '../../types/level';
import {
    IAction,
    HIRE,
    FIRE,
    DEPARTMENT_CHANGE,
    LEVEL_CHANGE,
} from './types';

function getActions() {
    const sortedDepartmentJoins = sortBy(departmentJoins, 'from');
    const hireActions: IAction<IDepartmentJoin>[] = departmentJoins.length === 0
        ? []
        : [
            {
                id: sortedDepartmentJoins[0].id,
                type: HIRE,
                date: sortedDepartmentJoins[0].from,
                entity: sortedDepartmentJoins[0],
            },
        ];
    const fireActions: IAction<IDepartmentJoin>[] = [];

    const departmentActions: IAction<IDepartmentJoin>[] = sortedDepartmentJoins.map((departmentJoin, index) => {
        const { id, from, to } = departmentJoin;
        const isLastDepartmentJoin = index === (sortedDepartmentJoins.length - 1);
        const isFireAction = isLastDepartmentJoin && to !== null;
        if (isFireAction) {
            fireActions.push({
                id,
                type: FIRE,
                date: to,
                entity: departmentJoin,
            });
        }
        return {
            id,
            type: DEPARTMENT_CHANGE,
            date: from,
            entity: departmentJoin,
        };
    });

    const levelActions: IAction<ILevelAchievement>[] = sortBy(levelAchievements, 'achieved.from').map((levelAchievement) => ({
        id: levelAchievement.id,
        type: LEVEL_CHANGE,
        date: levelAchievement.achieved.from,
        entity: levelAchievement,
    }));

    const actions = (hireActions as IAction<unknown>[])
        .concat(fireActions)
        .concat(departmentActions)
        .concat(levelActions);
    return sortBy(actions, 'date');
}

export const actions = getActions();
