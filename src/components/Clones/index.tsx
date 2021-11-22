import React from 'react';

import { IDepartmentJoin } from '../../types/department';
import { ILevelAchievement } from '../../types/level';
import { actions } from './constants';
import {
    HIRE,
    FIRE,
    DEPARTMENT_CHANGE,
    LEVEL_CHANGE,
} from './types';
import HireAction from './hire';
import FireAction from './fire';
import DepartmentAction from './department';
import LevelAction from './level';
import '../action-list.pcss';

export default function Clones() {
    return (
        <ul className='action-list'>
            {
                actions.map(({ id, type, entity }) => {
                    switch (type) {
                    case HIRE: return <HireAction key={ type + id } departmentJoin={ entity as IDepartmentJoin } />;
                    case FIRE: return <FireAction key={ type + id } departmentJoin={ entity as IDepartmentJoin } />;
                    case DEPARTMENT_CHANGE: return <DepartmentAction key={ type + id } departmentJoin={ entity as IDepartmentJoin } />;
                    case LEVEL_CHANGE: return <LevelAction key={ type + id } levelAchievement={ entity as ILevelAchievement } />;
                    default: return null;
                    }
                })
            }
        </ul>
    );
}
