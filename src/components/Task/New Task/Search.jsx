import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export function Search() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        type='submit'
        style={{
          marginTop: '50px',
          width: '20%',
          height: '50px',
          borderRadius: '40px',
          cursor: 'pointer',
          border: '0px',
          background: 'linear-gradient(2deg, rgba(0, 38, 240, 2), rgba(0, 0, 0, 3))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchIcon style={{ marginRight: '5px' }} />
        <input
          type="text"
          placeholder="Buscar"
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: '#fff',
            width: '80%',
          }}
        />
      </button>
    </div>
  );
}

   

