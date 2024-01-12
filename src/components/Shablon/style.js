import styled, { css } from "styled-components";
import lightning from "../../assets/icons/lightning.svg?react";
import copy from "../../assets/icons/copy.svg?react";
import code from "../../assets/icons/code.svg?react";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  color: black;
`;

export const Footer = styled.div`
  padding: 15px;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Desc = styled.div``;

Desc.Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .first {
    width: 10%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
  .last {
    width: 90%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
  .type {
    font-size: 15px;
    font-weight: 600;
  }
`;

Desc.Content = styled.div`
  padding: 15px;
`;

export const Content = styled.div`
  padding: 15px;
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
  padding: 4px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

Footer.Copy = styled(copy)`
  ${iconStyle}
`;
Footer.Code = styled(code)`
  ${iconStyle}
`;
Footer.Light = styled(lightning)`
  ${iconStyle}
`;
