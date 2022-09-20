import React from 'react';

interface ListPropTypes<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListPropTypes<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
