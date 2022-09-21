import React, { FC, useRef, useState } from 'react';

const EventExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(inputRef.current?.value);
  }

  const dragHadler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const handlerDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const handlerDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHadler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };

  return (
    <div>
      <div
        draggable
        onDrag={dragHadler}
        style={{ width: '100px', height: '100px', background: 'red', marginBottom: '30px' }}
      ></div>
      <div
        onDrop={dropHadler}
        onDragLeave={handlerDragLeave}
        onDragOver={handlerDragOver}
        style={{
          width: '100px',
          height: '100px',
          background: isDrag ? 'green' : 'red',
          marginBottom: '30px',
        }}
      ></div>

      <input placeholder="Управляемый" value={value} onChange={handleOnChange} />
      <input ref={inputRef} placeholder="Неуправляемый" />
      <button onClick={handleOnClick}>Click</button>
    </div>
  );
};

export default EventExample;
