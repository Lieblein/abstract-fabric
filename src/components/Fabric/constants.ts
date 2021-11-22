import sortBy from 'lodash/sortBy';

import { departmentJoins, levelAchievements } from '../../constants/data';
import { IDepartmentJoin } from '../../types/department';
import { ILevelAchievement } from '../../types/level';
import HireAction from './hire';
import FireAction from './fire';
import DepartmentAction from './department';
import LevelAction from './level';
import { IAction } from './types';

function getActions() {
    const sortedDepartmentJoins = sortBy(departmentJoins, 'from');
    const hireActions: IAction<null>[] = departmentJoins.length === 0
        ? []
        : [
            {
                key: 'hire' + sortedDepartmentJoins[0].id,
                date: sortedDepartmentJoins[0].from,
                hasDelete: false,
                entity: null,
                Component: HireAction,
            },
        ];
    const fireActions: IAction<IDepartmentJoin>[] = [];

    const departmentActions: IAction<IDepartmentJoin>[] = sortedDepartmentJoins.map((departmentJoin, index) => {
        const { id, from, to } = departmentJoin;
        const isLastDepartmentJoin = index === (sortedDepartmentJoins.length - 1);
        const isFireAction = isLastDepartmentJoin && to !== null;
        if (isFireAction) {
            fireActions.push({
                key: 'fire' + id,
                date: to,
                hasDelete: true,
                entity: departmentJoin,
                Component: FireAction,
            });
        }
        return {
            key: 'department' + id,
            date: from,
            hasDelete: isLastDepartmentJoin && !isFireAction,
            entity: departmentJoin,
            Component: DepartmentAction,
        };
    });

    const levelActions: IAction<ILevelAchievement>[] = sortBy(levelAchievements, 'achieved.from').map((levelAchievement, index, levelAchievements) => ({
        key: 'level' + levelAchievement.id,
        date: levelAchievement.achieved.from,
        hasDelete: index === levelAchievements.length - 1,
        entity: levelAchievement,
        Component: LevelAction,
    }));

    const actions: IAction<unknown>[] = (hireActions as IAction<any>[])
        .concat(fireActions)
        .concat(departmentActions)
        .concat(levelActions);
    return sortBy(actions, 'date');
}

export const actions = getActions();
