import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: 8px;
`;
Content.Item = styled.button`
  border-radius: ${({ id, $length }) =>
    id === 1 ? "8px 0 0 8px" : $length === id ? "0 8px 8px 0" : "0"};
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0;
  padding: 8px 10px;
  border-left: ${({ id }) => id !== 1 && "1px solid  rgba(0, 0, 0, 0.2)"};
  position: relative;
  .abs {
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.2);
    top: 100%;
    left: -100%;
    padding: 10px;
    border-radius: 8px;
    background: #fff;
    min-width: 70px;
    .abs-item {
      padding: 5px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
