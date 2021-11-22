import React from 'react';
import { NavLink } from 'react-router-dom';

import { FABRIC, SWITCH, CLONE } from '../../constants/routes';
import './layout.pcss';

const links = [
    {
        title: 'Switch',
        to: SWITCH,
    },
    {
        title: 'Атака клонов',
        to: CLONE,
    },
    {
        title: 'Фабрика',
        to: FABRIC,
    },
];

function getNavLinkClassName(props: { isActive: boolean; }) {
    return 'layout__link ' + (props.isActive ? 'layout__link--current' : '');
}

interface IProps {
    children: React.ReactNode;
}

export default function Layout(props: IProps) {
    const { children } = props;
    return (
        <div className='layout'>
            <nav>
                <ul className='layout__link-list'>
                    {
                        links.map(({ title, to }) =>
                            <li key={ title } className='layout__link-item'>
                                <NavLink
                                    className={ getNavLinkClassName }
                                    to={ to }
                                >
                                    { title }
                                </NavLink>
                            </li>,
                        )
                    }
                </ul>
            </nav>
            <main className='layout__content'>
                { children }
            </main>
        </div>
    );
}
