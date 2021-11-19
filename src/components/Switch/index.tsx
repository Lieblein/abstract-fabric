import React from 'react';

import Svg from '../Svg';
import { formatDate } from '../../utils/date';
import { levelMap, departmentMap } from '../../constants/data';
import { actions, iconMap, deleteCallbackMap } from './constants';
import {
    HIRE,
    FIRE,
    DEPARTMENT_CHANGE,
    LEVEL_CHANGE,
    ILevelDetail,
    IDepartmentDetail,
} from './types';
import '../action-list.pcss';

export default function Switch() {
    return (
        <ul className='action-list'>
            {
                actions.map(({ id, date, type, detail, hasDelete }) => {
                    const icon = iconMap.get(type);
                    const deleteCallback = deleteCallbackMap.get(type);
                    return (
                        <li key={ type + id } className='action-list__item'>
                            {
                                icon &&
                                (
                                    <Svg
                                        className={ 'action-list__icon' + (type === FIRE ? ' action-list__icon--fire' : '') }
                                        file={ icon }
                                    />
                                )
                            }
                            <div className='action-list__date'>
                                { formatDate(date) }
                            </div>
                            <div className='action-list__detail'>
                                {{
                                    [HIRE]: (
                                        <div className='action-list__title'>
                                            Принят в компанию
                                        </div>
                                    ),
                                    [FIRE]: (
                                        <div className='action-list__title'>
                                            Уволен
                                        </div>
                                    ),
                                    [DEPARTMENT_CHANGE]: (
                                        <>
                                            <div className='action-list__title'>
                                                Назначен в отдел
                                            </div>
                                            <div className='action-list__department'>
                                                { detail && departmentMap.get((detail as IDepartmentDetail).department)?.name }
                                            </div>
                                            <div className='action-list__comment'>
                                                { detail && (detail as IDepartmentDetail).comment }
                                            </div>
                                        </>
                                    ),
                                    [LEVEL_CHANGE]: (
                                        <>
                                            <div className='action-list__title'>
                                                Получен уровень
                                                {' '}
                                                <b>{ detail && levelMap.get((detail as ILevelDetail).level)?.name }</b>
                                            </div>
                                            <div className='action-list__comment'>
                                                { detail && (detail as ILevelDetail).comment }
                                            </div>
                                            <div className='action-list__promoted'>
                                                Дата повышения рейта
                                                {' '}
                                                { detail && (detail as ILevelDetail).promoted && formatDate((detail as ILevelDetail).promoted) }
                                            </div>
                                        </>
                                    ),
                                }[type]}
                            </div>
                            <div className='action-list__button'>
                                {
                                    hasDelete &&
                                    (
                                        <button
                                            className='button'
                                            type='button'
                                            onClick={ deleteCallback ? () => deleteCallback(id) : undefined }
                                        >
                                            удалить
                                        </button>
                                    )
                                }
                            </div>
                        </li>);
                })
            }
        </ul>
    );
}
