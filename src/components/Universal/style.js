import styled from "styled-components";
import { scrollStyle } from "../../utils/routes";

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

export const Content = styled.div`
  overflow-y: auto;
  ${scrollStyle}
  padding:25px;
  width: calc(100% - 250px);
  @media (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 700px) {
    padding: 10px;
  }
`;
