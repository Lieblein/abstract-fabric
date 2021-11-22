import React from 'react';

import { IActionProps } from './action';

export interface IAction<EntityType> extends IActionProps<EntityType> {
    key: string;
    Component: React.ComponentType<IActionProps<EntityType>>;
}
