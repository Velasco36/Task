import { Link } from "react-router-dom";
import "./style.css";

export function ButtonTask() {
  return (
    <div className="button-container">
      <div className="button-wrapper">
        <button type="submit" className="button">
          <Link to="/home">
            <h2 className="title">New Task</h2>
          </Link>
        </button>
      </div>
    </div>
  );
}

