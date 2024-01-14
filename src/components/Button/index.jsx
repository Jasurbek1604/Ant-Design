import React from "react";
import { Container } from "./style";
import "./style.css";

const Buttons = ({ type, children, style, onClick, hoverText }) => {
  return (
    <Container style={style} type={type} onClick={onClick}>
      {children}
      {hoverText && (
        <div className="hover-text">
          {hoverText} <div className="qirra"></div>
        </div>
      )}
    </Container>
  );
};

export default Buttons;
