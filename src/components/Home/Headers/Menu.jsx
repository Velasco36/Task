import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isClosed } from "../../../redux/actions";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

export function Menu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      document.querySelector(".modal").classList.add("slide-out");
    }
  }, [isOpen]);

  return (
    <>
      <MenuIcon className="menu" onClick={() => dispatch(isClosed(true))} />

      <div className={isOpen ? "modal" : "modal slide-out"}>
        {isOpen && (
          <div className="overlay">
            <div className="modal">
              <button onClick={() => dispatch(isClosed(false))}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
