import React from 'react';
import sortBy from 'lodash/sortBy';

import { IDepartmentJoin } from '../../types/department';
import { formatDate } from '../../utils/date';
import { deleteDepartmentJoin } from '../../actions';
import { departmentJoins, departmentMap } from '../../constants/data';
import Svg, { ISvgFile } from '../Svg';
import '../action-list.pcss';
const departmentIcon = require('../icons/loop.svg') as ISvgFile;

export default function DepartmentAction({ departmentJoin: { id, from, to, department, comment } }: { departmentJoin: IDepartmentJoin }) {
    const hasDelete = React.useMemo(() => to === null && sortBy(departmentJoins, 'from')[departmentJoins.length - 1].id === id, [id, to]);
    const onDelete = React.useCallback(() => deleteDepartmentJoin(id), [id]);
    return (
        <li className='action-list__item'>
            <Svg
                className='action-list__icon'
                file={ departmentIcon }
            />
            <div className='action-list__date'>
                { formatDate(from) }
            </div>
            <div className='action-list__detail'>
                <div className='action-list__title'>
                    Назначен в отдел
                </div>
                <div className='action-list__department'>
                    { departmentMap.get(department)?.name }
                </div>
                <div className='action-list__comment'>
                    { comment }
                </div>
            </div>
            <div className='action-list__button'>
                {
                    hasDelete &&
                    (
                        <button
                            className='button'
                            type='button'
                            onClick={ onDelete }
                        >
                            удалить
                        </button>
                    )
                }
            </div>
        </li>
    );
}
