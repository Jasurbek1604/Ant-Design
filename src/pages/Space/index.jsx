import React from "react";

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
    </div>
  );
};

export default Space;
