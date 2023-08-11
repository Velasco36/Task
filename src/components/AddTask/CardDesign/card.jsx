import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { updateDescription, updateTitle } from '../../../redux/actions'
import './style.css'

export function Card({ showButton, handleSubmit }) {
  const title = useSelector((state) => state.title)
  const description = useSelector((state) => state.description)

  const dispatch = useDispatch();

  return (
    <form className="form" id='form' onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="title border"
          type="text"
          value={title}
          placeholder=''
          onChange={(e) => dispatch(updateTitle((e.target.value)))}
        />
        <span className="floating-label">Title</span>
      </div>

      <div className="input-container">
        <textarea
          className="description border"
          value={description}
          placeholder=''
          onChange={(e) => dispatch(updateDescription((e.target.value)))}
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



