import { css } from "styled-components";
import Home from "../pages/Home";

export const routes = [{ id: 1, path: "", element: <Home /> }];

export const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: #1677ff;
  }
`;
