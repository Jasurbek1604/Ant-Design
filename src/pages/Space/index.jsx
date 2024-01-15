import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";

const Space = () => {
  return (
    <div>
      <div className="titile">Space</div>
      <div className="description">Set components spacing.</div>
      <div className="example">When To Use</div>
      <ul className="ul">
        <li>Avoid components clinging together and set a unified space.</li>
        <li>
          Use Space.Compact when child form components are compactly connected
          and the border is collapsed (After version antd@4.24.0 Supported).
        </li>
      </ul>
      <h4>Difference with Flex component</h4>
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
          <Shablon
            type="Basic Usage"
            desc="Crowded components horizontal spacing."
          ></Shablon>
          <Shablon
            type="Vertical Space"
            desc="Crowded components vertical spacing."
          ></Shablon>
          <Shablon
            type="Space size"
            desc="Use size to set the spacing, Three sizes are preset: small, middle, large. You can also customize the spacing. If size is not set, the spacing is small."
          ></Shablon>
          <Shablon type="Align" desc="Config item align."></Shablon>
          <Shablon type="Wrap" desc="Auto wrap line."></Shablon>
          <Shablon type="Split" desc="Crowded components split."></Shablon>
          <Shablon
            type="Compact Mode for form component"
            desc="Compact Mode for form component."
          ></Shablon>
          <Shablon
            type="Button Compact Mode"
            desc="Button component compact example."
          ></Shablon>
          <Shablon
            type="Vertical Compact Mode"
            desc="Vertical Mode for Space.Compact, support Button only."
          ></Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Space;
