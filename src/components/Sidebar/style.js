import styled from "styled-components";
import { scrollStyle } from "../../utils/routes";

export const Container = styled.div`
  width: 25%;
  padding: 20px;
  overflow-y: auto;
  box-shadow: ${({ mode }) =>
    mode === "light"
      ? "0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)"
      : "0 1px 5px 0 rgba(255, 255, 255, 0.1), 0 1px 6px -1px rgba(255, 255, 255, 0.02), 0 2px 5px 0 rgba(255, 255, 255, 0.02)"};
  ${scrollStyle}
`;
