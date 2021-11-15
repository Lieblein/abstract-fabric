import React from 'react';

export interface ISvgFile {
    default: {
        viewBox: string;
        id: string;
    };
}

interface IProps {
    file: ISvgFile;
}

export default function Svg(props: IProps) {
    const {
        file: { default: { viewBox, id } },
    } = props;
    return (
        <svg viewBox={ viewBox }>
            <use xlinkHref={ `#${id}` } />
        </svg>
    );
}
