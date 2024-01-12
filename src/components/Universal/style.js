import styled from "styled-components";
import { scrollStyle } from "../../utils/routes";

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

export const Content = styled.div`
  margin: 5px 5px 5px 10px;
  overflow-y: auto;
  width: 80%;
  ${scrollStyle}
`;
