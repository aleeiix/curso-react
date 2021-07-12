import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';


interface Props {
    saveItem: (item: Partial<Item>) => void;
}

export const AddItem: FC<Props> = ({saveItem}) => {
    const dispatch: Dispatch = useDispatch<any>();

    const [item, setItem] = useState<Partial<Item>>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        saveItem(item)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={item.title} placeholder="Title" onChange={handleChange} />
            <input type="text" name="body" value={item.body} placeholder="Body" onChange={handleChange} />
            <button disabled={!item}>Add Item</button>
        </form>
    )
}