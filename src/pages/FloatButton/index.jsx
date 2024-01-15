import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";
import { Container, TopBar, Icons } from "./style";
import topbar from "../../assets/icons/topbar.png";
import Buttons from "../../components/Button";

const FloatButton = () => {
  return (
    <div>
      <div className="title">FloatButton</div>
      <div className="description">
        FloatButton. Available since <span className="code">5.0.0.</span>
      </div>
      <div className="example">When To Use</div>
      <ul className="ul">
        <li>For global functionality on the site.</li>
        <li>Buttons that can be seen wherever you browse.</li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Content.Row>
          <Shablon type={"Basic"} desc="The most basic usage.">
            <Container>
              <TopBar src={topbar} />
              <Container.Data>
                <Icons.Doc />
              </Container.Data>
            </Container>
          </Shablon>
          <Shablon
            type={"Shape"}
            desc={
              "Change the shape of the FloatButton with <span class='code'>shape</span>."
            }
          >
            <Container>
              <TopBar src={topbar} />
              <Container.Data>
                <Icons.HeadPhonesLight type="primary" />
                <Icons.HeadPhonesLight border={8} type="primary" />
              </Container.Data>
            </Container>
          </Shablon>
          <Shablon
            type={"FloatButton with tooltip"}
            desc={
              "Setting <span class='code'>tooltip</span> prop to show FloatButton with tooltip."
            }
          >
            <Container>
              <TopBar src={topbar} />
              <Container.Data>
                <Icons.Doc />
              </Container.Data>
            </Container>
          </Shablon>
          <Shablon
            type={"Menu mode"}
            desc={
              "Open menu mode with <span class='code'>trigger</span>, which could be <span class='code'>hover</span> or <span class='code'>click</span>."
            }
          >
            <Container>
              <TopBar src={topbar} />
              <Container.Data>
                <Icons.HeadPhonesLight type="primary" />
                <Icons.HeadPhonesLight type="primary" />
              </Container.Data>
            </Container>
          </Shablon>
          <Shablon
            type={"BackTop"}
            desc={
              "<span class='code'>BackTop</span> makes it easy to go back to the top of the page."
            }
          >
            <Container>
              <TopBar src={topbar} />
            </Container>
          </Shablon>
        </Content.Row>
        <Content.Row>
          <Shablon
            type={"Type"}
            desc={
              "Change the type of the FloatButton with <span class='code'>type</span>."
            }
          >
            <Container>
              <TopBar src={topbar} />
            </Container>
          </Shablon>
          <Shablon
            type={"Description"}
            desc={
              "Setting <span class='code'>description</span> prop to show FloatButton with description. supported only when <span class='code'>shape</span> is <span class='code'>square</span>. Due to narrow space for text, short sentence is recommended."
            }
          >
            <Container>
              <TopBar src={topbar} />
            </Container>
          </Shablon>
          <Shablon
            type={"FloatButton Group"}
            desc={
              "When multiple buttons are used together, <span class='code'><FloatButton.Group /></span> is recommended. By setting <span class='code'>shape</span> of FloatButton.Group, you can change the shape of group. <span class='code'>shape</span> of FloatButton.Group will override <span class='code'>shape</span> of FloatButton inside."
            }
          >
            <Container>
              <TopBar src={topbar} />
            </Container>
          </Shablon>
          <Shablon
            type={"Controlled mode"}
            desc={
              "Set the component to controlled mode through <span class='code'>open</span>, which need to be used together with trigger."
            }
          >
            <Container>
              <TopBar src={topbar} />
            </Container>
          </Shablon>
          <Shablon type={"badge"} desc={"FloatButton with Badge."}>
            <Container>
              <TopBar src={topbar} />
            </Container>
          </Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default FloatButton;
