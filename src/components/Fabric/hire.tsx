import React from 'react';

import { ISvgFile } from '../Svg';
import Action from './action';
const hireIcon = require('../icons/briefcase.svg') as ISvgFile;

export default class HireAction extends Action<null> {
    Icon = hireIcon;

    onDelete = null;

    renderDetails() {
        return (
            <div className='action-list__title'>
                Принят в компанию
            </div>
        );
    }
}
