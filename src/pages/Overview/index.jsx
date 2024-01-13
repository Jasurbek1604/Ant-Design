import React from "react";
import { Container, Content } from "./style";
import { routes } from "../../utils/routes";
import { useModeContext } from "../../context/ModeContext";

const Home = () => {
  const [mode] = useModeContext();
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
        {routes.map(({ id, link, path, title, Icon }) =>
          title ? (
            <div className="example content-title" key={id}>
              {title}
            </div>
          ) : (
            link &&
            path !== "/" && (
              <Content.Item mode={mode} to={path} key={id}>
                <Content.BoxTitle>{link}</Content.BoxTitle>
                <Content.Icon>{Icon}</Content.Icon>
              </Content.Item>
            )
          )
        )}
      </Content>
    </Container>
  );
};

export default Home;
