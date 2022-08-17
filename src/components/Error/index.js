import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ErrorWrapper } from "./styled";
import { clearError } from "../../store/actions";

const ErrorComp = ({ error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
    // eslint-disable-next-line
  }, [error]);

  return (
    <div>
      <ErrorWrapper>{error}</ErrorWrapper>
    </div>
  );
};

export default ErrorComp;
