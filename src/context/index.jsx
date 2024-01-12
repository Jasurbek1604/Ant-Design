import React from "react";
import ModeContextComponent from "./ModeContext";

const ContextComponent = ({ children }) => {
  return (
    <React.Fragment>
      <ModeContextComponent>{children}</ModeContextComponent>
    </React.Fragment>
  );
};
export default ContextComponent;
