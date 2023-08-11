import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsVisible } from "../../redux/actions";
import "./style.css";

export function Notification({ message, type, onClose }) {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.isVisible);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setIsVisible(false));
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [dispatch, onClose]);

  const handleDismiss = () => {
    dispatch(setIsVisible(false));
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className={`notification ${type}`}>
          <p>{message}</p>
          <span className="close-icon" onClick={handleDismiss}>
            &#x2715;
          </span>
        </div>
      )}
      {!isVisible && (
        <div className={`notification ${type} closing`}>
          <p>{message}</p>
          <span className="close-icon" onClick={handleDismiss}>
            &#x2715;
          </span>
        </div>
      )}
    </>
  );
}
