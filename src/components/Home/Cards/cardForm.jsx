import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const CardForm= ({ cardTitle, setCardTitle, cardDescriptions, setDescriptions, handleClick }) => {
  return (
    <div className="input-container">
    <div className="input-container">
      <input
        className="title border"
        id="title"
        type="text"
        placeholder=" "
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <span className="floating-label">Title</span>
    </div>
    <div className="input-container">
      <textarea
        className="description border"
        placeholder=" "
        value={cardDescriptions}
        onChange={(e) => setDescriptions(e.target.value)}
      />
      <span className="floating-label">Description</span>
    </div>

    <div className="input-container">
      <Link to="/">
        <button className="add-card-btn" onClick={handleClick}>
          edit
        </button>
      </Link>
    </div>
  </div>
  )
}
