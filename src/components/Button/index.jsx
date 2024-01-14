import React from "react";
import { Container } from "./style";
import "./style.css";

const Buttons = ({ type, children, style, onClick }) => {
  return (
    <Container style={style} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Buttons;
