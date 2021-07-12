import { useCallback } from "react";
import { Dispatch, FC } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import AddItem from './components/AddItem'
import Article from './components/Article'

import {addItem, removeItem} from './store/actionsFactory'

const App: FC = () => {

  const dispatch: Dispatch<any> = useDispatch();

  const items: readonly Item[] = useSelector(
    (state: ItemState) => state.items,
    shallowEqual
  )

  const saveItem = useCallback((item: Item) => {
    dispatch(addItem(item))
  }, [dispatch])

  const deleteItem = useCallback((item: Item) => {
    dispatch(removeItem(item))
  }, [dispatch])

  return (
    <div className="App">
      <h1>My Items</h1>
      <AddItem saveItem={saveItem} />
      {items.map((item: Item) => (
        <Article key={item.id} item={item} removeItem={deleteItem}/>
      ))}
    </div>
  );
}

export default App;
