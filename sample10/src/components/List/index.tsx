import {FC, useState} from 'react';


// ANTI PATRON

// const List: FC = () => {
//     const [items, setItems] = useState<string[]>(['Primero', 'Segundo']);

//     const handleClick = () => {
//         const newItems = items.slice();
//         newItems.unshift('Tercero');
//         setItems(newItems);
//     }

//     return (
//         <div>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>
//                         {item}
//                         <input type="text" />
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleClick}>+</button>
//         </div>
//     )
// }


// SOLUCION
const List: FC = () => {
    const [items, setItems] = useState([{id: 0, text: 'Primero'}, {id: 1, text: 'Segundo'}]);

    const handleClick = () => {
        const newItems = items.slice();
        newItems.unshift({id: Date.now(), text: 'Tercero'});
        setItems(newItems);
    }

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.text}
                        <input type="text" />
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default List;