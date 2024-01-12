import React from "react";
import { Container, Content } from "./style";
import { routes } from "../../utils/routes";

const Home = () => {
  return (
    <Container>
      <div className="title">Components Overview</div>
      <div className="description">
        <span className="code">antd</span> provides plenty of UI components to
        enrich your web applications, and we will improve components experience
        consistently. We also recommend some great Third-Party Libraries
        additionally.
      </div>
      <Content>
        {routes.map(
          ({ id, link, path }) =>
            link &&
            path !== "/" && (
              <Content.Item to={path} key={id}>
                <Content.BoxTitle>{link}</Content.BoxTitle>
              </Content.Item>
            )
        )}
      </Content>
    </Container>
  );
};

export default Home;
