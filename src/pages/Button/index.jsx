import React from "react";
import Shablon from "../../components/Shablon";
import { Content } from "./style";

const Button = () => {
  return (
    <div>
      <div className="title">Button</div>
      <div className="description">To trigger an operation.</div>
      <div className="example">When To Use</div>
      <div className="description">
        A button means an operation (or a series of operations). Clicking a
        button will trigger corresponding business logic. In Ant Design we
        provide 5 types of button.
      </div>
      <ul className="ul">
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
        <li>Default button: indicate a series of actions without priority.</li>
        <li>Dashed button: commonly used for adding more actions.</li>
        <li>Text button: used for the most secondary action.</li>
        <li>Link button: used for external links.</li>
        <li>
          <span className="code">danger</span>: used for actions of risk, like
          deletion or authorization.
        </li>
        <li>
          <span className="code">ghost</span>: used in situations with complex
          background, home pages usually.
        </li>
        <li>
          <span className="code">disabled</span>: when actions are not
          available.
        </li>
        <li>
          <span className="code">loading</span>: add loading spinner in button,
          avoiding multiple submits too.
        </li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Shablon
          content={"jasurbek"}
          type={"jasurbek"}
          desc={"Jasubek Otelbayev"}
        />
        <Shablon
          content={"jasurbek"}
          type={"jasurbek"}
          desc={"Jasubek Otelbayev"}
        />
        <Shablon
          content={"jasurbek"}
          type={"jasurbek"}
          desc={"Jasubek Otelbayev"}
        />
        <Shablon
          content={"jasurbek"}
          type={"jasurbek"}
          desc={"Jasubek Otelbayev"}
        />
        <Shablon
          content={"jasurbek"}
          type={"jasurbek"}
          desc={"Jasubek Otelbayev"}
        />
      </Content>
    </div>
  );
};

export default Button;
