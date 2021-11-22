import React from 'react';

import { deleteDepartmentJoin } from '../../actions';
import { IDepartmentJoin } from '../../types/department';
import { departmentMap } from '../../constants/data';
import { ISvgFile } from '../Svg';
import Action from './action';
const departmentIcon = require('../icons/loop.svg') as ISvgFile;

export default class DepartmentAction extends Action<IDepartmentJoin> {
    Icon = departmentIcon;

    onDelete = () => {
        const { entity: { id } } = this.props;
        deleteDepartmentJoin(id);
    };

    renderDetails() {
        const { entity: { department, comment } } = this.props;
        return (
            <>
                <div className='action-list__title'>
                    Назначен в отдел
                </div>
                <div className='action-list__department'>
                    { departmentMap.get(department)?.name }
                </div>
                <div className='action-list__comment'>
                    { comment }
                </div>
            </>
        );
    }
}
