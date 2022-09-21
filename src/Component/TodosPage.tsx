import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import List from './List';
import TodoItem from './TotoItem/TodoItem';

const TodosPage: FC = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      );
      setTodo(response.data);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <List items={todo} renderItem={(item: ITodo) => <TodoItem key={item.id} item={item} />} />
    </div>
  );
};

export default TodosPage;
