import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";

const Typography = () => {
  return (
    <div>
      <div className="title">Typography</div>
      <div className="description">
        Basic text writing, including headings, body text, lists, and more.
      </div>
      <div className="example">When To Use</div>
      <ul className="ul">
        <li>
          When need to display a title or paragraph contents in
          Articles/Blogs/Notes.
        </li>
        <li>When you need copyable/editable/ellipsis texts.</li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Content.Row>
          <Shablon
            type={"Title Component"}
            desc={"Display title in different level."}
          ></Shablon>
          <Shablon
            type={"Text and Link Component"}
            desc={"Provides multiple types of text and link."}
          ></Shablon>
          <Shablon
            type={"Editable"}
            desc={"Make Typography editable."}
          ></Shablon>
          <Shablon
            type={"Copytable"}
            desc={"Make Typography copyable."}
          ></Shablon>
          <Shablon
            type={"Ellipsis"}
            desc={
              "Multiple line ellipsis support. You can use <span class='code'>tooltip</span> to config ellipsis tooltip. Recommend <span class='code'>expandable</span> when have lots of content."
            }
          ></Shablon>
          <Shablon
            type={"Ellipsis from middle"}
            desc={
              "You can ellipsis content from middle by customize <span class='code'>ellipsis={{ suffix: ... }}</span>."
            }
          ></Shablon>
          <Shablon
            type={"suffix"}
            desc={"add suffix ellipsis support."}
          ></Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Typography;
