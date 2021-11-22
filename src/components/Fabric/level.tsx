import React from 'react';

import { deleteLevelAchievement } from '../../actions';
import { ILevelAchievement } from '../../types/level';
import { levelMap } from '../../constants/data';
import { formatDate } from '../../utils/date';
import { ISvgFile } from '../Svg';
import Action from './action';
const levelIcon = require('../icons/star.svg') as ISvgFile;

export default class LevelAction extends Action<ILevelAchievement> {
    Icon = levelIcon;

    onDelete = () => {
        const { entity: { id } } = this.props;
        deleteLevelAchievement(id);
    };

    renderDetails() {
        const { entity: { level, comment, promoted } } = this.props;
        return (
            <>
                <div className='action-list__title'>
                    Получен уровень
                    {' '}
                    <b>{ levelMap.get(level)?.name }</b>
                </div>
                <div className='action-list__comment'>
                    { comment }
                </div>
                <div className='action-list__promoted'>
                    Дата повышения рейта
                    {' '}
                    { formatDate(promoted.from) }
                </div>
            </>
        );
    }
}
