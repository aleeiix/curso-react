import {FC, useEffect, memo} from 'react'

interface Props {
    id: number;
    task: string;
    handleDelete: (id: number) => void;
}

const Task: FC<Props> = ({id, task, handleDelete}) => {
    useEffect(() => {
        console.log('RENDERING <Task />', task);
    })

    return (
        <li>{task} <button onClick={() => handleDelete(id)}>Borrar</button></li>
    )
}

export default memo(Task);