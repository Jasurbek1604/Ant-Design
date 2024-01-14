import React from "react";

const Grid = () => {
  return (
    <div>
      <div className="title">Grid</div>
      <div className="description">24 Grids System.</div>
      <div className="example">Design Concept</div>
      <div className="description">
        In most business situations, Ant Design needs to solve a lot of
        information storage problems within the design area, so based on 12
        Grids System, we divided the design area into 24 sections. We name the
        divided area 'box'. We suggest four boxes for horizontal arrangement at
        most, one at least. Boxes are proportional to the entire screen as shown
        in the picture above. To ensure a high level of visual comfort, we
        customize the typography inside of the box based on the box unit.
      </div>
      <div className="example">Outline</div>
      <div className="description">
        In the grid system, we define the frame outside the information area
        based on row and column, to ensure that every area can have stable
        arrangement.
      </div>
      <div className="description">
        Following is a brief look at how it works:
      </div>
      <ul className="ul">
        <li>
          Establish a set of column in the horizontal space defined by row
          (abbreviated col).
        </li>
        <li>
          Your content elements should be placed directly in the col, and only
          col should be placed directly in row.
        </li>
        <li>
          The column grid system is a value of 1-24 to represent its range
          spans. For example, three columns of equal width can be created by{" "}
          <span className="code">{"<Col span={8} />"}</span>.
        </li>
        <li>
          If the sum of col spans in a row are more than 24, then the
          overflowing col as a whole will start a new line arrangement.
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
      <div className="description">
        Our grid systems base on Flex layout to allow the elements within the
        parent to be aligned horizontally - left, center, right, wide
        arrangement, and decentralized arrangement. The Grid system also
        supports vertical alignment - top aligned, vertically centered,
        bottom-aligned. You can also define the order of elements by using
        order. Layout uses a 24 grid layout to define the width of each "box",
        but does not rigidly adhere to the grid layout.
      </div>
      <div className="example">Examples</div>
    </div>
  );
};

export default Grid;
