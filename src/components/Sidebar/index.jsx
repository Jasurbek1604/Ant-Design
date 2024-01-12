import React, { useState } from "react";
import { Container, Title, Link } from "./style";
import { routes } from "../../utils/routes";
import { useModeContext } from "../../context/ModeContext";

const Sidebar = () => {
  const [mode] = useModeContext();
  return (
    <Container mode={mode}>
      {routes.map(({ id, title, link, path }) =>
        title ? (
          <Title mode={mode} key={id}>
            {title}
          </Title>
        ) : (
          <Link key={id} to={path} mode={mode}>
            {link}
          </Link>
        )
      )}
    </Container>
  );
};

export default Sidebar;
