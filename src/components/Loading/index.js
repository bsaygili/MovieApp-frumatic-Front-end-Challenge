import React from "react";
import { Spinner } from "react-bootstrap";

import { SpinnerWrapper } from "./styled";

const Loading = () => {
  return (
    <SpinnerWrapper>
      <Spinner animation="grow" />
    </SpinnerWrapper>
  );
};

export default Loading;
