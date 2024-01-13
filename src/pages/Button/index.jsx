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
        <Content.Row>
          <Shablon
            type={"Type"}
            desc={`There are button, default button, dashed button, text button and link button in antd.`}
          >
            jasurbek
          </Shablon>
          <Shablon
            type={"Size"}
            desc={
              "Ant Design supports a default button size as well as a large and small size.If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size."
            }
          ></Shablon>
          <Shablon
            type="Loading"
            desc={
              "A loading indicator can be added to a button by setting the loading property on the Button."
            }
          ></Shablon>
          <Shablon
            type="Ghost Button"
            desc={
              "ghost property will make button's background transparent, it is commonly used in colored background."
            }
          ></Shablon>
          <Shablon
            type={"Block Button"}
            desc={
              "block property will make the button fit to its parent width."
            }
          ></Shablon>
        </Content.Row>
        <Content.Row>
          <Shablon
            type={"Icon"}
            desc={
              "Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button. If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property."
            }
          ></Shablon>
          <Shablon
            type={"Disabled"}
            desc={
              "To mark a button as disabled, add the disabled property to the Button."
            }
          ></Shablon>
          <Shablon
            type={"Multiple Buttons"}
            desc={
              "If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button."
            }
          ></Shablon>
          <Shablon
            type={"Danger Buttons"}
            desc={"danger is a property of button after antd 4.0."}
          ></Shablon>
        </Content.Row>
        <Shablon></Shablon>
      </Content>
    </div>
  );
};

export default Button;
