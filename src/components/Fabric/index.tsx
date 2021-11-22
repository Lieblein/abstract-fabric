import React from 'react';

import { actions } from './constants';
import '../action-list.pcss';

export default function Fabric() {
    return (
        <ul className='action-list'>
            {
                actions.map(({ key, date, hasDelete, entity, Component }) =>
                    <Component
                        key={ key }
                        date={ date }
                        hasDelete={ hasDelete }
                        entity={ entity }
                    />,
                )
            }
        </ul>
    );
}
