import React, {FC, useState, useReducer} from 'react';

type Note = {
    id: number;
    note: string;
}

type Action = {
    type: string;
    payload?: any
}

enum ActionType {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
}

const initialNotes: Note[] = [
    {id: 1, note: 'Note 1'},
    {id:2, note: 'Note 2'}
]

const reducer = (state: Note[], action: Action) => {
    switch(action.type) {
        case ActionType.ADD:
            return [...state, action.payload];

        case ActionType.UPDATE:
            const stateUpdated = state.map(note => note.id === action.payload.id ? action.payload : note)
            return [...stateUpdated];

        case ActionType.DELETE:
            const newState = state.filter(note => note.id !== action.payload)
            return [...newState];

        default:
            return state;
    }
}

const Notes: FC<any> = () => {
    const [note, setNote] = useState<string>('');

    const [notes, dispatch] = useReducer(reducer, initialNotes)

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const newNote: Note = {
            id: Date.now(),
            note
        }

        dispatch({
            type: ActionType.ADD,
            payload: newNote
        })

        setNote('')
    }

    const handleDelete = (id: number) => {
        dispatch({
            type: ActionType.DELETE,
            payload: id
        })
    }

    return (
        <>
            <h2>Notes</h2>
            <ul>
                {notes.map((note: Note) => (
                    <li key={note.id}>{note.note} <button onClick={() => handleDelete(note.id)}>Eliminar</button></li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nueva Nota" value={note} onChange={e => setNote(e.target.value)} />
            </form>
        </>
    )
}

export default Notes;