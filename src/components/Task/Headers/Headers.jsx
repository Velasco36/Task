import React from 'react';
import { Menu } from './Menu';

export function Headers () {
  return (
    <div
      className='barra'
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '9vh',
        backgroundColor: '#252850',
        background: 'linear-gradient(2deg, rgba(0, 40, 240, 1), rgba(0, 0, 0, 0.2))',
        boxShadow: '0px 4px 10px rgb(0,240, 240)',
      }}
    >
      <Menu />
      <h1
        style={{
          flex: 1,
          textAlign: 'center',
          color: 'white',
          textShadow: '0 0 5px rgba(0, 40, 240, 0.7), 0 0 10px rgba(0, 40, 240, 0.5), 0 0 15px rgba(0, 40, 240, 0.3)',
        }}
      >
        Task Manager
      </h1>
    </div>
  );
};
