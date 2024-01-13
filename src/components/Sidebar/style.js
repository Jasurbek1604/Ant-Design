import styled from "styled-components";
import { scrollStyle } from "../../utils/routes";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 250px;
  padding: 25px 5px 10px 5px;
  overflow-y: auto;
  box-shadow: ${({ mode }) =>
    mode === "light"
      ? "0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)"
      : "0 1px 5px 0 rgba(255, 255, 255, 0.1), 0 1px 6px -1px rgba(255, 255, 255, 0.02), 0 2px 5px 0 rgba(255, 255, 255, 0.02)"};
  ${scrollStyle}
  display: flex;
  flex-direction: column;
  gap: 1px;
  @media (max-width: 800px) {
    transition: 0.5s;
    position: fixed;
    overflow-x: auto;
    z-index: 2;
    height: 100vh;
    width: 70%;
    left: ${({ $isopen }) => ($isopen === "true" ? 0 : "-100%")};
    top: 0;
    background: ${({ mode }) => (mode === "light" ? "#fff" : "black")};
  }
`;

export const Title = styled.div`
  font-size: 14px;
  margin: 5px 15px;
  padding: 10px 0;
  border-bottom: ${({ mode }) =>
    mode === "light"
      ? "1px solid rgba(0, 0, 0, 0.1)"
      : "1px solid rgba(255, 255, 255, 0.4)"};
  font-weight: 500;
  color: ${({ mode }) =>
    mode === "light" ? "#00000073" : "rgba(255, 255, 255, 0.4)"};
`;
export const Link = styled(NavLink)`
  transition: 0.3s;
  font-size: 14px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  color: ${({ mode }) =>
    mode === "light" ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 1)"};
  &.active {
    color: rgb(22, 119, 255);
    background: rgba(22, 119, 255, 0.2);
  }
  &:hover {
    background: ${({ mode }) =>
      mode === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.4)"};
  }
`;
