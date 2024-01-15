import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";

const Divider = () => {
  return (
    <div>
      <div className="title">Divider</div>
      <div className="description">
        A divider line separates different content.
      </div>
      <div className="example">When To Use</div>
      <ul className="ul">
        <li>Divide sections of article.</li>
        <li>
          Divide inline text and links such as the operation column of table.
        </li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Content.Row>
          <Shablon
            type="Horizontal"
            desc="Divider is <span class='code'>horizontal</span> by default. You can add text within Divider."
          ></Shablon>
          <Shablon
            type="Text without heading style"
            desc="You can use non-heading style of divider text by setting <span class='code'>plain</span>."
          ></Shablon>
        </Content.Row>
        <Content.Row>
          <Shablon
            type="Devider with title"
            desc="Divider with inner title, set <span class='code'>orientation='left/right'</span> to align it."
          ></Shablon>
          <Shablon
            type="Vertical"
            desc="Use <span class='code'>type='vertical'</span> make it vertical."
          ></Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Divider;
