import {FC} from 'react';

interface Props {
    x:number;
    y:number;
    radius:number;
    fill?: string;
}

const Circle: FC<Props> = ({x, y, radius, fill = 'red'}) => {
    return (
        <svg height="100" width="100">
            <circle cx={x} cy={y} r={radius} fill={fill}/>
        </svg>
    )
}

export default Circle;