import React, { useState } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Content, Wrapper } from "./style";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color:${({ theme }) => theme.color}
  }
`;

const Universal = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const theme = {
    bg: mode === "light" ? "var(--bgLight)" : "var(--bgDark)",
    color: mode === "light" ? "var(--light)" : "var(--dark)",
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header data={[mode, setMode]} />
        <Wrapper>
          <Sidebar mode={mode} />
          <Content style={{ padding: "25px" }}>
            <Outlet />
          </Content>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default Universal;
