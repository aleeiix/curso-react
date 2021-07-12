/// <reference types="react-scripts" />
interface Item {
    id?: number;
    title: string;
    body: string;
}

type ItemState = {
    items: Item[]
}

type ItemAction = {
    type: string;
    payload: Item;
}

type DispatchType = (args: ItemAction) => ItemAction