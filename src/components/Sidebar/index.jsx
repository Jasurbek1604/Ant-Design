import React from "react";
import { Container, Title, Link } from "./style";
import { routes } from "../../utils/routes";
import { useModeContext } from "../../context/ModeContext";
import { Content } from "../Header/style";

const Sidebar = () => {
  const [mode, setMode, isopen, setIsOpen] = useModeContext();
  return (
    <Container mode={mode} $isopen={isopen.toString()}>
      {isopen && (
        <Content.Right $sidebar={"true"}>
          <div className="name">Jasurbek Oʻtelbayev</div>
          <div className="wrapper">
            <div className="div">
              <label htmlFor="dark">
                {mode === "light" ? (
                  <Content.Moon mode={mode} />
                ) : (
                  <Content.MoonLight mode={mode} />
                )}
              </label>
              <input
                id="dark"
                onClick={() => {
                  localStorage.setItem("mode", "dark");
                  setMode("dark");
                }}
                name="input"
                type="radio"
              />
              <input
                id="light"
                name="input"
                onClick={() => {
                  localStorage.setItem("mode", "light");
                  setMode("light");
                }}
                type="radio"
              />
              <label htmlFor="light">
                {mode === "light" ? (
                  <Content.Sun mode={mode} />
                ) : (
                  <Content.SunLight mode={mode} />
                )}
              </label>
            </div>
            <div>
              <Content.Link target="blank" to="https://youtube.com/@frontwebuz">
                {mode === "light" ? (
                  <Content.Youtube mode={mode} />
                ) : (
                  <Content.YoutubeLight mode={mode} />
                )}
              </Content.Link>
              <Content.Link
                target="blank"
                to="https://instagram.com/frontwebuz"
              >
                {mode === "light" ? (
                  <Content.Instagram mode={mode} />
                ) : (
                  <Content.InstagramLight mode={mode} />
                )}
              </Content.Link>
              <Content.Link target="blank" to="https://t.me/frontwebuz">
                {mode === "light" ? (
                  <Content.Telegram mode={mode} />
                ) : (
                  <Content.TelegramLight mode={mode} />
                )}
              </Content.Link>
              <Content.Link target="blank" to="https://github.com/Jasurbek1604">
                {mode === "light" ? (
                  <Content.Github mode={mode} />
                ) : (
                  <Content.GithubLight mode={mode} />
                )}
              </Content.Link>
            </div>
          </div>
        </Content.Right>
      )}
      {routes.map(({ id, title, link, path }) =>
        title ? (
          <Title mode={mode} key={id}>
            {title}
          </Title>
        ) : (
          <Link key={id} to={path} onClick={() => setIsOpen(false)} mode={mode}>
            {link}
          </Link>
        )
      )}
    </Container>
  );
};

export default Sidebar;
