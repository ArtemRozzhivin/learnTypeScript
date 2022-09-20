import React, { FC, useState } from 'react';

export enum CartVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CartProps {
  width: string;
  height: string;
  children: React.ReactNode;
  variant: CartVariant;
  onClick: (num: number) => void;
}

const Cart: FC<CartProps> = ({ width, height, variant, onClick, children }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CartVariant.outlined ? '1px solid black' : 'none',
        background: variant === CartVariant.primary ? 'lightgray' : '',
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Cart;
