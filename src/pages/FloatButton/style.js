import styled, { css } from "styled-components";
import doc from "../../assets/icons/document.svg?react";
import question from "../../assets/icons/question.svg?react";
import questionLight from "../../assets/icons/question-light.svg?react";
import headphones from "../../assets/icons/headphones.svg?react";
import headphonesLight from "../../assets/icons/headphones-light.svg?react";
import refresh from "../../assets/icons/refresh.svg?react";
import upload from "../../assets/icons/upload.svg";
import message from "../../assets/icons/message.svg";

export const Icons = styled.div``;

const iconStyle = css`
  transition: 0.4s;
  width: 45px;
  height: 45px;
  border-radius: ${({ border }) => (border ? `${border}px` : "50%")};
  background: ${({ type }) =>
    type === "primary" ? "var(--primary)" : "var(--white)"};
  padding: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin: 0 15px;
  &:hover {
    background: ${({ type }) =>
      type === "primary" ? "var(--primaryHover)" : "rgba(0, 0, 0, 0.1)"};
  }
`;

Icons.Doc = styled(doc)`
  ${iconStyle}
`;
Icons.Question = styled(question)`
  ${iconStyle}
`;
Icons.QuestionLight = styled(questionLight)`
  ${iconStyle}
`;
Icons.HeadPhones = styled(headphones)`
  ${iconStyle}
`;
Icons.HeadPhonesLight = styled(headphonesLight)`
  ${iconStyle}
`;
Icons.Refresh = styled(refresh)`
  ${iconStyle}
`;
Icons.Upload = styled(upload)`
  ${iconStyle}
`;
Icons.Message = styled(message)`
  ${iconStyle}
`;

export const Container = styled.div`
  height: 389px;
  border: 1px solid gainsboro;
  border-radius: 7px;
  position: relative;
  @media (max-width: 800px) {
    height: 300px;
  }
`;

export const TopBar = styled.img`
  width: 100%;
  height: 30px;
`;

Container.Data = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 50px;
  height: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
