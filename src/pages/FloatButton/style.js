import styled from "styled-components";

export const Container = styled.div`
  height: 389px;
  border: 1px solid gainsboro;
  border-radius: 7px;
  position: relative;
  @media (max-width: 800px) {
    height: 250px;
  }
`;

export const TopBar = styled.img`
  width: 100%;
  height: 30px;
`;
