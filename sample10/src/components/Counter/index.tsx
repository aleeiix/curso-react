import {FC, useState} from 'react';

// ANTI PATRON

// interface Props {
//     count: number;
// }

// const Counter: FC<Props> = ({count}) => {
//     const [state, setState] = useState<any>({count});

//     const handleClick = () => {
//         setState({
//             count: count + 1
//         })
//     }

//     return (
//         <div>
//             <span>{state.count}</span>
//             <button onClick={handleClick}>+</button>
//         </div>
//     )
// }


// SOLUCION
interface Props {
    initialCount: number;
}

const Counter: FC<Props> = ({initialCount}) => {
    const [state, setState] = useState<any>({count: initialCount});

    const handleClick = () => {
        setState({
            count: state.count + 1
        })
    }

    return (
        <div>
            <span>{state.count}</span>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter;