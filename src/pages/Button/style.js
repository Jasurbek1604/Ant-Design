import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

Content.Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
