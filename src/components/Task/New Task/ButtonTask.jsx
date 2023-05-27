import React from 'react'


export function ButtonTask() {
  return (
    <div style={{textAlign: 'center'}}>
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
        
      }}>

      <h2>
        New task
      </h2>
    </button>

    </div>
    
  )
}
