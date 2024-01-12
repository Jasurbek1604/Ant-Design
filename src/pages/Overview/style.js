import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

Content.Item = styled(NavLink)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`;

Content.BoxTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;
