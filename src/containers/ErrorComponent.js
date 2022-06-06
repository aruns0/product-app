import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ErrorTypes } from "../redux/constants/error-types";

const ErrorComponent = (props) => {
  const isErrorOpen = useSelector((state) => state.error.isOpen);
  const error = useSelector((state) => state.error.error);
  const dispatch = useDispatch();
  const handleeErrorClose = () => {
    dispatch({ type: ErrorTypes.HIDE_ERROR });
  };
  return (
    <>
      {isErrorOpen && error && (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={handleeErrorClose}>
              x
            </span>
            <span>{error + ""}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorComponent;
