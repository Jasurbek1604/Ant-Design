import React, { useState } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { ThemeProvider, createGlobalStyle } from "styled-components";

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
        <Outlet />
        <Sidebar />
      </ThemeProvider>
    </div>
  );
};

export default Universal;
