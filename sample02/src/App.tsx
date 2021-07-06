import React, { useMemo, useCallback, useEffect, useState } from 'react';

import ListTask, { Todo } from './ListTask'

const initialTodo: Todo[] = [
  {id: 1, task: 'Hacer compra'},
  {id: 2, task: 'Jugar ps4'}
];

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodo);
  const [task, setTask] = useState<string>('');
  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    console.log('RENDERING <App />');
  })

  const handleCreate = (event: any) => {
    const id = getLastId();
    setTodoList([...todoList, {id, task}])
  }

  const getLastId = (): number => {
    const lastId = todoList.reduce((acc, value) => {
       if (value.id > acc) {
         return value.id
       }
       return acc;
    }, 0)

    return lastId + 1;
  }

  const handleSearch = () => {
    setTerm(task);
  }

  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }), [todoList, term])

  const handleDelete = useCallback((id: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== id);
    setTodoList(newTodoList);
  }, [])
  // const handleDelete = (id: number) => {
  //   const newTodoList = todoList.filter((todo: Todo) => todo.id !== id);
  //   setTodoList(newTodoList);
  // }

  const handleTodoList = useCallback(() => {
    console.log('TODO LIST ==> ', todoList);
  },[todoList])
  
  useEffect(() => {
    handleTodoList();
  }, [todoList, handleTodoList])
  
  
  return (
    <main>
      <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
      <button onClick={handleCreate}>Crear Task</button>
      <button type="button" onClick={handleSearch}>Filtrar</button>

      <hr />

      <ListTask todoList={filteredTodoList} handleDelete={handleDelete} />
    </main>
  );
}

export default App;
