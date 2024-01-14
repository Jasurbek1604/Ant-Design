import React from "react";
import { Content } from "./style";

const ButtonGroup = ({ items }) => {
  return (
    <Content>
      {items.map(
        ({ id, label, onClick, onMouseEnter, onMouseLeave, action, abs }) => (
          <Content.Item
            onClick={onClick}
            $length={items?.length}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            id={id}
            key={id}
            action={action}
          >
            {label}
            {action === "true" && (
              <div className="abs">
                {abs?.map(({ id, label }) => (
                  <div className="abs-item" key={id}>
                    {label}
                  </div>
                ))}
              </div>
            )}
          </Content.Item>
        )
      )}
    </Content>
  );
};

export default ButtonGroup;
