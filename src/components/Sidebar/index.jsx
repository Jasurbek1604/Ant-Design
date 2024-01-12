import React, { useState } from "react";
import { Container, Title, Link } from "./style";
import { routes } from "../../utils/routes";

const Sidebar = ({ mode }) => {
  const [path, setPath] = useState("");
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  document.title = `Ant Design ${
    path !== "/" ? ` - ${capitalizeFirstLetter(path.slice(1))}` : ""
  }`;
  return (
    <Container mode={mode}>
      {routes.map(({ id, title, link, path }) =>
        title ? (
          <Title mode={mode} key={id}>
            {title}
          </Title>
        ) : (
          <Link key={id} to={path} onClick={() => setPath(path)} mode={mode}>
            {link}
          </Link>
        )
      )}
    </Container>
  );
};

export default Sidebar;
