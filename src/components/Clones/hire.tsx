import React from 'react';

import { IDepartmentJoin } from '../../types/department';
import { formatDate } from '../../utils/date';
import Svg, { ISvgFile } from '../Svg';
import '../action-list.pcss';
const hireIcon = require('../icons/briefcase.svg') as ISvgFile;

export default function HireAction({ departmentJoin: { from } }: { departmentJoin: IDepartmentJoin }) {
    return (
        <li className='action-list__item'>
            <Svg
                className='action-list__icon'
                file={ hireIcon }
            />
            <div className='action-list__date'>
                { formatDate(from) }
            </div>
            <div className='action-list__detail'>
                <div className='action-list__title'>
                    Принят в компанию
                </div>
            </div>
            <div className='action-list__button' />
        </li>
    );
}
