import React from 'react';
import sortBy from 'lodash/sortBy';

import { ILevelAchievement } from '../../types/level';
import { formatDate } from '../../utils/date';
import { deleteLevelAchievement } from '../../actions';
import { levelAchievements, levelMap } from '../../constants/data';
import Svg, { ISvgFile } from '../Svg';
import '../action-list.pcss';
const levelIcon = require('../icons/star.svg') as ISvgFile;

export default function LevelAction({ levelAchievement: { id, achieved, promoted, level, comment } }: { levelAchievement: ILevelAchievement }) {
    const hasDelete = React.useMemo(() => sortBy(levelAchievements, 'achieved.from')[levelAchievements.length - 1].id === id, [id]);
    const onDelete = React.useCallback(() => deleteLevelAchievement(id), [id]);
    return (
        <li className='action-list__item'>
            <Svg
                className='action-list__icon'
                file={ levelIcon }
            />
            <div className='action-list__date'>
                { formatDate(achieved.from) }
            </div>
            <div className='action-list__detail'>
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
