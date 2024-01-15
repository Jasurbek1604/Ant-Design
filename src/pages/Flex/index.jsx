import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";

const Flex = () => {
  return (
    <div>
      <div className="title">Flex</div>
      <div className="description">
        Flex. Available since <span className="code">5.10.0</span>.
      </div>
      <div className="example">When To Use</div>
      <ul className="ul">
        <li>Good for setting spacing between elements.</li>
        <li>
          Suitable for setting various horizontal and vertical alignments.
        </li>
      </ul>
      <div className="example">Difference with Space component</div>
      <ul className="ul">
        <li>
          Space is used to set the spacing between inline elements. It will add
          a wrapper element for each child element for inline alignment.
          Suitable for equidistant arrangement of multiple child elements in
          rows and columns.
        </li>
        <li>
          Flex is used to set the layout of block-level elements. It does not
          add a wrapper element. Suitable for layout of child elements in
          vertical or horizontal direction, and provides more flexibility and
          control.
        </li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Content.Row>
          <Shablon type="Basic" desc="The basic usage."></Shablon>
          <Shablon type="Align" desc="Set align."></Shablon>
          <Shablon
            type="Gap"
            desc="Set the <span class='code'>gap</span>  between elements, which has three preset sizes: <span class='code'>small</span>, <span class='code'>middle</span> , <span class='code'>large</span> , You can also customize the gap size."
          ></Shablon>
          <Shablon type="Wrap" desc="Auto wrap line."></Shablon>
          <Shablon
            type="Combination"
            desc="Nesting can achieve more complex layouts."
          ></Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Flex;
