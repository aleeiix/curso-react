import {FC, useEffect, memo} from 'react'

import Task from './Task'

export type Todo = {
    id: number;
    task: string;
}

interface Props {
    todoList: Todo[];
    handleDelete: (id: number) => void;
}

const ListTask: FC<Props> = ({todoList, handleDelete}) => {
    useEffect(() => {
        console.log('RENDERING <ListTask />', todoList);
    })

    return (
        <ul>
            {todoList.map((todo: Todo) => <Task key={todo.id} id={todo.id} task={todo.task} handleDelete={handleDelete}/>)}
        </ul>
    )
}

export default memo(ListTask);