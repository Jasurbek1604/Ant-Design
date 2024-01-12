import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

Content.Item = styled(NavLink)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: 0.3s;
  text-decoration: none;
  background: #fff;
  &:hover {
    box-shadow: ${({ mode }) =>
      mode === "light"
        ? "0 0 15px rgba(0, 0, 0, 0.2)"
        : "0 0 15px rgba(255, 255, 255, 0.5)"};
  }
`;

Content.BoxTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

Content.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
`;
