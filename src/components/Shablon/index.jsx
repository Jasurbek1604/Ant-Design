import React from "react";
import { Container, Desc, Footer, Content } from "./style";
import { NavLink } from "react-router-dom";

const Shablon = ({ children, type, desc }) => {
  return (
    <Container>
      <Content>{children || "content"}</Content>
      {type && (
        <Desc>
          <Desc.Title>
            <div className="first"></div>
            <div className="type">
              {type}
              <NavLink
                target="blank"
                to="https://github.com/Jasurbek1604/Ant-Design"
              >
                <Desc.Edit />
              </NavLink>
            </div>
            <div className="last"></div>
          </Desc.Title>
          <Desc.Content dangerouslySetInnerHTML={{ __html: desc }} />
        </Desc>
      )}
      <Footer>
        <abbr title="Copy">
          <Footer.Copy />
        </abbr>
        <abbr title="Show code">
          <Footer.Code />
        </abbr>
      </Footer>
    </Container>
  );
};

export default Shablon;
