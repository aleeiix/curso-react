import * as ActionTypes from './actionTypes';

export function addItem(item: Item) {
    const action = {
        type: ActionTypes.ADD_ITEM,
        payload: item
    } 

    return simulateHttpRequest(action)
}

export function removeItem(item: Item) {
    const action = {
        type: ActionTypes.REMOVE_ITEM,
        payload: item
    } 

    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ItemAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}