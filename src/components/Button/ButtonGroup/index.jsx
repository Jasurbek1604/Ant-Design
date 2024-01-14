import React from "react";
import { Content } from "./style";

const ButtonGroup = ({ items }) => {
  return (
    <Content>
      {items.map(({ id, label, onClick }) => (
        <Content.Item
          onClick={() => onClick()}
          $length={items?.length}
          id={id}
          key={id}
        >
          {label}
        </Content.Item>
      ))}
    </Content>
  );
};

export default ButtonGroup;
