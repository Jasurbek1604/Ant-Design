import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Content, Wrapper } from "./style";
import { useModeContext } from "../../context/ModeContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color:${({ theme }) => theme.color}
  }
`;

const Universal = () => {
  const [mode] = useModeContext();
  const theme = {
    bg: mode === "light" ? "var(--bgLight)" : "var(--bgDark)",
    color: mode === "light" ? "var(--light)" : "var(--dark)",
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Wrapper>
          <Sidebar />
          <Content>
            <Outlet />
          </Content>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default Universal;
