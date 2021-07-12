import { FC, useCallback } from "react";

interface Props {
  item: Item;
  removeItem: (item: Item) => void;
};

export const Article: FC<Props> = ({ item, removeItem }) => {

  const deleteItem = useCallback(
    (item: Item) => {removeItem(item)},
    [removeItem]
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

export default Article;