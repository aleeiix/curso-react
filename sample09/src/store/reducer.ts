import * as ActionType from './actionTypes';

const initialState: ItemState = {
    items: [
        {
            id: 1,
            title: 'Item 1',
            body: 'Item Body 1'
        },
        {
            id: 2,
            title: 'Item 2',
            body: 'Item Body 2'
        }
    ]
}

const reducer = (state: ItemState = initialState, action: ItemAction): ItemState => {
    switch(action.type) {
        case ActionType.ADD_ITEM:
            const newItem: Item = {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body
            };
            return {
                ...state,
                items: [...state.items, newItem]
            }

        case ActionType.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export default reducer;