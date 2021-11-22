import React from 'react';

import Svg, { ISvgFile } from '../Svg';
import { formatDate } from '../../utils/date';

export interface IActionProps<EntityType> {
    date: string;
    hasDelete: boolean;
    entity: EntityType;
}

export default abstract class Action<EntityType> extends React.PureComponent<IActionProps<EntityType>> {
    abstract Icon: ISvgFile;

    iconClassName?: string;

    abstract onDelete: (() => void) | null;

    abstract renderDetails(): React.ReactNode;

    render() {
        const { date, hasDelete } = this.props;
        return (
            <li className='action-list__item'>
                <Svg
                    className={ 'action-list__icon ' + (this.iconClassName || '') }
                    file={ this.Icon }
                />
                <div className='action-list__date'>
                    { formatDate(date) }
                </div>
                <div className='action-list__detail'>
                    { this.renderDetails() }
                </div>
                <div className='action-list__button'>
                    {
                        hasDelete &&
                        (
                            <button
                                className='button'
                                type='button'
                                onClick={ this.onDelete || undefined }
                            >
                                удалить
                            </button>
                        )
                    }
                </div>
            </li>
        );
    }
}
