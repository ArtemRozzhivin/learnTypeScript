import React, { FC } from 'react';
import { ITodo } from '../../types/types';

interface TodoItemPropTypes {
  item: ITodo;
}

const TodoItem: FC<TodoItemPropTypes> = ({ item }) => {
  return (
    <div>
      <input type="checkbox" onChange={() => console.log('Hi')} checked={item.completed} />
      {item.id}. {item.title}
    </div>
  );
};

export default TodoItem;
