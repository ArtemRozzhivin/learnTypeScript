import React, { FC } from 'react';
import { IUser } from '../../types/types';
import './UserItem.scss';

interface UserItemPropTypes {
  user: IUser;
}

const UserItem: FC<UserItemPropTypes> = ({ user }) => {
  return (
    <div className="userItem">
      <div>
        {user.id}. Пользователь {user.name} живет в городе {user.address.city} на улице{' '}
        {user.address.street}
      </div>
    </div>
  );
};

export default UserItem;
