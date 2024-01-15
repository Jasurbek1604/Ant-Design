import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";

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
      <Content>
        <Content.Row>
          <Shablon
            type="Basic Grid"
            desc="From the stack to the horizontal arrangement. You can create a basic grid system by using a single set of Row and Col grid assembly, all of the columns (Col) must be placed in Row."
          ></Shablon>
          <Shablon
            type="Grid Gutter"
            desc="You can use the gutter property of Row as grid spacing, we recommend set it to (16 + 8n) px (n stands for natural number). You can set it to a object like { xs: 8, sm: 16, md: 24, lg: 32 } for responsive design. You can use an array to set vertical spacing, [horizontal, vertical] [16, { xs: 8, sm: 16, md: 24, lg: 32 }]. vertical gutter was supported after 3.24.0."
          ></Shablon>
          <Shablon
            type="Column offset"
            desc="offset can set the column to the right side. For example, using offset = {4} can set the element shifted to the right four columns width."
          ></Shablon>
          <Shablon
            type="Grid sort"
            desc="By using push and pull class you can easily change column order."
          ></Shablon>
          <Shablon
            type="Typesetting"
            desc="Child elements depending on the value of the start, center, end, space-between, space-around and space-evenly, which are defined in its parent node typesetting mode."
          ></Shablon>
          <Shablon
            type="Alignment"
            desc="Child elements vertically aligned."
          ></Shablon>
          <Shablon
            type="Order"
            desc="To change the element sort by order."
          ></Shablon>
          <Shablon
            type="Flex Strech"
            desc="Col provides flex prop to support fill rest."
          ></Shablon>
          <Shablon
            type="Responsive"
            desc="Referring to the Bootstrap responsive design, here preset six dimensions: xs sm md lg xl xxl."
          ></Shablon>
          <Shablon
            type="More Responsive"
            desc="span pull push offset order property can be embedded into xs sm md lg xl xxl properties to use, where xs={6} is equivalent to xs={{span: 6}}."
          ></Shablon>
          <Shablon
            type="Playgroung"
            desc="A simple playground for column count and gutter."
          ></Shablon>
          <Shablon
            type="useBreackpoint Hook"
            desc="Use <span class='code'>useBreakpoint</span> Hook provide personalized layout."
          ></Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Grid;
