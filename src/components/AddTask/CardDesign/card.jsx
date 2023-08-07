import React from 'react'
import './style.css'

export function Card({showButton,handleSubmit, title, setTitle, description, setDescription}) {

  return (
    <form className="form" id='form' onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="title border"
          type="text"
          value={title}
          placeholder=''
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className="floating-label">Title</span>
      </div>

      <div className="input-container">
        <textarea
          className="description border"
          value={description}
          placeholder=''
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="floating-label">Description</span>
      </div>

      {showButton && (
        <button
          id="button"
          className='button'
          type="submit"
        >
          Submit
        </button>
      )}
    </form>
  )

}



