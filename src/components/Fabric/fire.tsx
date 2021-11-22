import React from 'react';

import { unfire } from '../../actions';
import { IDepartmentJoin } from '../../types/department';
import { ISvgFile } from '../Svg';
import Action from './action';
const fireIcon = require('../icons/fire.svg') as ISvgFile;

export default class FireAction extends Action<IDepartmentJoin> {
    Icon = fireIcon;

    iconClassName = 'action-list__icon--fire';

    onDelete = () => {
        const { entity: { id } } = this.props;
        unfire(id);
    };

    renderDetails() {
        return (
            <div className='action-list__title'>
                Уволен
            </div>
        );
    }
}
