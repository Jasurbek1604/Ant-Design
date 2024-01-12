import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Universal from "../components/Universal";
import { routes } from "../utils/routes";
import ContextComponent from "../context";

const Root = () => {
  return (
    <ContextComponent>
      <BrowserRouter>
        <Routes>
          <Route element={<Universal />}>
            {routes.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextComponent>
  );
};

export default Root;
