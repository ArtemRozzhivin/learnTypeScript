import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from './Component/List';
import UserItem from './Component/UserItem/UserItem';
import Cart, { CartVariant } from './Component/Cart';

import UserList from './Component/UserList/UserList';
import { ITodo, IUser } from './types/types';
import TodoItem from './Component/TotoItem/TodoItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodo();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  };

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
    <div className="App">
      <Cart
        onClick={(num) => console.log('Cart', num)}
        variant={CartVariant.primary}
        width="200px"
        height="200px"
      >
        HEllo
      </Cart>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      ></List>
      <List items={todo} renderItem={(item: ITodo) => <TodoItem key={item.id} item={item} />} />
    </div>
  );
}

export default App;
