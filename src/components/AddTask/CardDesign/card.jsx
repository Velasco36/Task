import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDescription, updateTitle } from "../../../redux/actions";
import "./style.css";

export function Card({ showButton, handleSubmit, load}) {


  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);

  const dispatch = useDispatch();

  return (
    <form className="form" id="form">
      <div className="input-container">
        <input
          className="title border"
          type="text"
          id="color-title"
          value={title}
          placeholder=""
          required
          onChange={(e) => dispatch(updateTitle(e.target.value))}
        />
        <span className="floating-label">Title</span>
      </div>

      <div className="input-container">
        <textarea
          className="description border"
          value={description}
          placeholder=""
          required
          onChange={(e) => dispatch(updateDescription(e.target.value))}
          rows={5}
          cols={50}
        />
        <span className="floating-label">Description</span>
      </div>

      {load && (
        <div className="containerloader">
          <span className="loader"></span>
        </div>
      )}

      {showButton && (
        <button
          id="button"
          className="button"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </form>
  );
}
