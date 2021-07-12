import {ChangeEvent, FC, FormEvent, useState} from 'react';

interface Props {
    saveItem: (item: Item) => void;
}

export const AddItem: FC<Props> = ({saveItem}) => {
    const [item, setItem] = useState<any>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        saveItem(item as Item)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={item?.title} placeholder="Title" onChange={handleChange} />
            <input type="text" name="body" value={item?.body} placeholder="Body" onChange={handleChange} />
            <button disabled={!item}>Add Item</button>
        </form>
    )
}

export default AddItem;