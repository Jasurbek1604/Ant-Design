import React from "react";
import { Container, Desc, Footer, Content } from "./style";

const Shablon = ({ content, type, desc }) => {
  return (
    <Container>
      <Content>{content || "content"}</Content>
      {desc && (
        <Desc>
          <Desc.Title>
            <div className="first"></div>
            <div className="type">{type}</div>
            <div className="last"></div>
          </Desc.Title>
          <Desc.Content>{desc}</Desc.Content>
        </Desc>
      )}
      <Footer>
        <abbr title="Copy">
          <Footer.Copy />
        </abbr>
        <abbr title="Code">
          <Footer.Light />
        </abbr>
        <abbr title="Show code">
          <Footer.Code />
        </abbr>
      </Footer>
    </Container>
  );
};

export default Shablon;
