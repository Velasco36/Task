import React, { useState } from 'react';
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import { useDispatch } from "react-redux";
import { addNotification, anchor_task } from '../../../redux/actions';

export function IconsAnchor({ anchor }) {
  const [localAnchor, setLocalAnchor] = useState(anchor); 
  const dispatch = useDispatch();
  dispatch(anchor_task(localAnchor));


  const handlePinup = () => {
    if (localAnchor === "pending") {
      dispatch(
        addNotification({
          type: "success",
          message: "Se ha Fijado correctamente anchor",
        })
      );
      setLocalAnchor("anchored");
    } else {
      dispatch(
        addNotification({
          type: "success",
          message: "Se ha desAnclado correctamente pending",
        })
      );
      setLocalAnchor('pending');
    }
  };

  return (
    <div>
      <AnchorOutlinedIcon
        style={{ color : localAnchor === 'anchored' ? 'red' : 'white' }}
        className="right-icon"
        onClick={() => handlePinup()}
      />
    </div>
  )
}
