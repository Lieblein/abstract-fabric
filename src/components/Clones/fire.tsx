import React from 'react';
import sortBy from 'lodash/sortBy';

import { IDepartmentJoin } from '../../types/department';
import { formatDate } from '../../utils/date';
import { unfire } from '../../actions';
import { departmentJoins } from '../../constants/data';
import Svg, { ISvgFile } from '../Svg';
import '../action-list.pcss';
const fireIcon = require('../icons/fire.svg') as ISvgFile;

export default function FireAction({ departmentJoin: { id, to } }: { departmentJoin: IDepartmentJoin }) {
    const hasDelete = React.useMemo(() => sortBy(departmentJoins, 'from')[departmentJoins.length - 1].id === id, [id]);
    const onDelete = React.useCallback(() => unfire(id), [id]);
    return (
        <li className='action-list__item'>
            <Svg
                className='action-list__icon action-list__icon--fire'
                file={ fireIcon }
            />
            <div className='action-list__date'>
                { to && formatDate(to) }
            </div>
            <div className='action-list__detail'>
                <div className='action-list__title'>
                    Уволен
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
