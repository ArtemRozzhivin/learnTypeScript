import React, { FC } from 'react';
import { IUser } from '../../types/types';
import UserItem from '../UserItem/UserItem';

interface UserListPropTypes {
  users: IUser[];
}

const UserList: FC<UserListPropTypes> = ({ users }) => {
  return (
    <div>
      {users.map((item) => (
        <UserItem key={item.id} user={item}></UserItem>
      ))}
    </div>
  );
};

export default UserList;
