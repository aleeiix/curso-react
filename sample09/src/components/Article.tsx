import { FC, useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface Props {
  item: Item;
  removeItem: (item: Item) => void;
};

export const Article: FC<Props> = ({ item, removeItem }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteItem = useCallback(
    (item: Item) => dispatch(removeItem(item)),
    [dispatch, removeItem]
  );

  return (
    <div className="Article">
      <div>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
      <button onClick={() => deleteItem(item)}>Delete</button>
    </div>
  );
};
