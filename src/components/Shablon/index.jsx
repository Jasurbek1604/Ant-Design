import React, { useState } from "react";
import { Container, Desc, Footer, Content } from "./style";
import { NavLink } from "react-router-dom";
import Buttons from "../Button";

const Shablon = ({ children, type, desc }) => {
  const [copy, setCopy] = useState(false);
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
        <Buttons
          style={{ padding: 0 }}
          hoverText={copy ? "Copied!" : "Copy"}
          onClick={() => setCopy(true)}
        >
          <Footer.Copy />
        </Buttons>
        <Buttons style={{ padding: 0 }} hoverText={"Code"}>
          <Footer.Code />
        </Buttons>
      </Footer>
    </Container>
  );
};

export default Shablon;
