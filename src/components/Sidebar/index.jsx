import React, { useState } from "react";
import { Container, Title, Link } from "./style";
import { routes } from "../../utils/routes";

const Sidebar = ({ mode }) => {
  const [active, setActive] = useState("/");
  return (
    <Container mode={mode}>
      {routes.map(({ id, title, link, path }) =>
        title ? (
          <Title mode={mode} key={id}>
            {title}
          </Title>
        ) : (
          <Link
            key={id}
            active={`${active === window.location.pathname}`}
            to={path}
            mode={mode}
          >
            {link}
          </Link>
        )
      )}
    </Container>
  );
};

export default Sidebar;
