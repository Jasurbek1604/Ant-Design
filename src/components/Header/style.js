import styled, { css } from "styled-components";
import logo from "../../assets/icons/logo.svg?react";
import instagram from "../../assets/icons/instagram.svg?react";
import telegram from "../../assets/icons/telegram.svg?react";
import github from "../../assets/icons/github.svg?react";
import sun from "../../assets/icons/sun.svg?react";
import moon from "../../assets/icons/moon.svg?react";
import youtube from "../../assets/icons/youtube.svg?react";
import menu from "../../assets/icons/menu.svg?react";
import close from "../../assets/icons/close.svg?react";

import instagramLight from "../../assets/icons/instagram-light.svg?react";
import telegramLight from "../../assets/icons/telegram-light.svg?react";
import githubLight from "../../assets/icons/github-light.svg?react";
import sunLight from "../../assets/icons/sun-light.svg?react";
import moonLight from "../../assets/icons/moon-light.svg?react";
import youtubeLight from "../../assets/icons/youtube-light.svg?react";
import menuLight from "../../assets/icons/menu-light.svg?react";
import closeLight from "../../assets/icons/close-light.svg?react";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: ${({ mode }) =>
    mode === "light"
      ? "0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)"
      : "0 1px 5px 0 rgba(255, 255, 255, 0.1), 0 1px 6px -1px rgba(255, 255, 255, 0.02), 0 2px 5px 0 rgba(255, 255, 255, 0.02)"};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin: auto;
  .name {
    white-space: nowrap;
  }
  .btn {
    display: none;
  }
  @media (max-width: 800px) {
    padding: 0 10px;
    .btn {
      display: block;
      width: 100px;
      text-align: end;
    }
  }
`;

Content.Left = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
Content.Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const styleBtn = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

Content.Logo = styled(logo)`
  width: 32px;
  height: 32px;
`;

Content.Menu = styled(menu)`
  ${styleBtn}
`;
Content.MenuLight = styled(menuLight)`
  ${styleBtn}
`;

Content.Close = styled(close)`
  ${styleBtn}
`;
Content.CloseLight = styled(closeLight)`
  ${styleBtn}
`;

Content.Right = styled.div`
  display: ${({ $sidebar }) => ($sidebar === "true" ? "none" : "flex")};
  align-items: center;
  gap: 50px;
  .div {
    input {
      display: none;
    }
  }
  @media (max-width: 800px) {
    display: ${({ $sidebar }) => ($sidebar !== "true" ? "none" : "flex")};
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
    .name {
      font-weight: 700;
      font-size: 20px;
    }
    .wrapper {
      display: flex;
      gap: 25px;
    }
  }
`;

Content.Link = styled(NavLink)`
  margin: 0 1px;
`;

const iconStyle = css`
  transition: 0.3s;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 4px;
  &:hover {
    background: ${({ mode }) => (mode === "light" ? "#cecece" : "gray")};
  }
`;

const buttonStyle = css`
  background: ${({ mode }) => (mode === "light" ? "#cecece" : "gray")};
`;

Content.Instagram = styled(instagram)`
  ${iconStyle}
`;
Content.Youtube = styled(youtube)`
  ${iconStyle}
  padding: 2px;
`;
Content.Github = styled(github)`
  ${iconStyle}
`;
Content.Telegram = styled(telegram)`
  ${iconStyle}
`;
Content.Sun = styled(sun)`
  ${iconStyle}
  ${({ mode }) => mode === "light" && buttonStyle}
`;
Content.Moon = styled(moon)`
  ${iconStyle}
  ${({ mode }) => mode === "dark" && buttonStyle}
`;

Content.InstagramLight = styled(instagramLight)`
  ${iconStyle}
`;
Content.YoutubeLight = styled(youtubeLight)`
  ${iconStyle}
  padding: 2px;
`;
Content.GithubLight = styled(githubLight)`
  ${iconStyle}
`;
Content.TelegramLight = styled(telegramLight)`
  ${iconStyle}
`;
Content.SunLight = styled(sunLight)`
  ${iconStyle}
  ${({ mode }) => mode === "light" && buttonStyle}
`;
Content.MoonLight = styled(moonLight)`
  ${iconStyle}
  ${({ mode }) => mode === "dark" && buttonStyle}
`;
