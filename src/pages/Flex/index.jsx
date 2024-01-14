import React from "react";

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
    </div>
  );
};

export default Flex;
