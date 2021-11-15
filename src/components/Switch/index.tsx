import React from 'react';

import Svg from '../Svg';
import { actions, iconMap } from './constants';
import '../action-list.pcss';

export default function Switch() {
    return (
        <ul className='action-list'>
            {
                actions.map(({ id, date, type }) => {
                    const icon = iconMap.get(type);
                    return (
                        <li key={ id } className='action-list__item'>
                            {
                                icon &&
                                (
                                    <Svg
                                        className='action-list__item'
                                        file={ icon }
                                    />
                                )
                            }
                            <div className='action-list__date'>
                                { date }
                            </div>
                        </li>);
                })
            }
        </ul>
    );
}
