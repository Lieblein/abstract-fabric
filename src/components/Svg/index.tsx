import React from 'react';

export interface ISvgFile {
    default: {
        viewBox: string;
        id: string;
    };
}

interface IProps {
    className?: string;
    file: ISvgFile;
}

export default function Svg(props: IProps) {
    const {
        className,
        file: { default: { viewBox, id } },
    } = props;
    return (
        <svg className={ className } viewBox={ viewBox }>
            <use xlinkHref={ `#${id}` } />
        </svg>
    );
}
