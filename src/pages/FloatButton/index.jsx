import React, { useState } from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";
import { Container, TopBar, Icons } from "./style";
import topbar from "../../assets/icons/topbar.png";

const FloatButton = () => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
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
                <div className="div">
                  <Icons.Doc />
                  <div className="hoverContent">
                    <div className="arrow"></div>
                    Document
                  </div>
                </div>
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
              <Container.Data $click={click}>
                <div
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="divv"
                >
                  <div className="content">
                    <Icons.Doc />
                    <Icons.Message />
                  </div>
                  {hover ? (
                    <Icons.CloseLight type="primary" />
                  ) : (
                    <Icons.HeadPhonesLight type="primary" />
                  )}
                </div>
                <div className="divv" onClick={() => setClick(!click)}>
                  <div className="clicked">
                    <Icons.Doc />
                    <Icons.Message />
                  </div>
                  {click ? (
                    <Icons.CloseLight type="primary" />
                  ) : (
                    <Icons.HeadPhonesLight type="primary" />
                  )}
                </div>
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
              <div className="wrapper" id="wrapper">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                tempore quasi aperiam temporibus aliquam ex eum, maiores ab
                corrupti voluptatem sunt consequatur architecto porro dolorem
                similique placeat sint in officia? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Atque distinctio sed eaque
                repellendus perspiciatis asperiores minus consequuntur quam
                natus veritatis aliquid magni vel ut quasi mollitia repudiandae
                vero corrupti a iste eveniet cumque, iusto magnam quos? Quia
                perspiciatis laborum corrupti beatae, minima optio obcaecati quo
                officia ullam ipsum perferendis illum eos impedit iure, ad
                reprehenderit nostrum at ut! Deleniti atque ut, qui, vitae
                consequuntur quo similique itaque alias eligendi, in fugit a.
                Eaque perferendis, ea officiis ab voluptate commodi non,
                asperiores nemo cupiditate id velit quod odit? Reiciendis, quam
                dolorem fugiat itaque, iste doloremque provident aperiam facere
                accusantium at voluptates quaerat est et cum veniam ipsam? Eius
                totam fuga tempora recusandae corrupti vel pariatur illo fugiat
                aspernatur consequatur qui quaerat officiis iusto praesentium
                nemo eos magni aliquam maxime eveniet, quia sapiente repellat
                quas rem facilis! Ex rem minima earum, totam cumque, deleniti
                quis ducimus quisquam error accusantium, recusandae aperiam.
                Quis sapiente dicta quaerat, minus omnis iste natus assumenda
                ipsa aspernatur odio saepe rem voluptates voluptatibus
                cupiditate incidunt sint nam vero molestiae laboriosam,
                inventore in ab ipsum a perspiciatis! Eveniet voluptatibus
                repudiandae impedit provident delectus numquam voluptates atque
                eum. Animi quo expedita impedit repudiandae. Eos fugiat est
                ducimus tempore nostrum qui reiciendis architecto pariatur.
                Minus libero aliquam dicta veniam earum laborum velit assumenda
                id enim porro mollitia consectetur quibusdam rerum et
                voluptates, debitis iure odio voluptas adipisci quam nesciunt
                dolor. Sapiente, praesentium voluptate quod quae possimus ex
                atque optio hic quis porro deleniti alias repudiandae quas nemo
                ullam repellat ipsum adipisci ipsam magni voluptatum nisi
                officia. Praesentium, quidem? Eaque ex eveniet, iste obcaecati
                expedita et deserunt in, saepe iusto distinctio alias voluptatem
                illum sequi quidem, nostrum consectetur placeat? Molestiae
                eligendi deleniti animi dolorem, tenetur nam! Quisquam ullam
                eaque laborum, veniam exercitationem veritatis nesciunt facilis,
                quia tempora voluptate neque! Adipisci commodi aliquam
                distinctio suscipit similique eveniet? Veniam non delectus
                consequuntur odit in facere ullam magnam nobis eum debitis.
                Accusamus beatae eius alias voluptatibus molestias dolor
                voluptas minus aspernatur obcaecati doloribus fugit maiores
                ducimus optio debitis, fuga cum. Sunt error explicabo vitae
                suscipit quos fugiat qui modi, dolorum debitis vel corrupti
                incidunt officia voluptatibus minima, beatae sequi laboriosam
                eligendi dolorem. Repellat molestias, aliquid accusamus
                asperiores iste, perferendis facilis modi illo reprehenderit
                nisi non omnis tempora enim dolorum quia dignissimos, culpa
                provident harum quidem? Voluptatum quae aliquam nostrum cum
                dolorem dolorum inventore tempore, magni eos, possimus, culpa
                quam sunt laudantium! Expedita aspernatur nemo a dicta nulla
                minus, magnam veniam officiis earum quo illo repellat obcaecati
                voluptatibus cum vero, error placeat provident, labore harum ea!
                Labore, odit rem aliquid unde ratione exercitationem ab quod
                earum voluptas autem voluptate, debitis qui amet dignissimos
                sunt nobis, aperiam ipsam voluptatum consectetur adipisci
                similique impedit? Nobis voluptatibus quod facere sit, nostrum
                distinctio dolorem tenetur pariatur quam sequi magni. Eos, a?
                Exercitationem consectetur dicta ut id expedita blanditiis
                perspiciatis, ipsa voluptates quod iure impedit. Exercitationem
                deserunt facere, tempora amet iure possimus dolore nam atque
                voluptas enim dolorum molestiae, modi perspiciatis. Voluptatem
                aut ab minima distinctio consequuntur labore expedita optio
                doloribus.
              </div>
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
              <Container.Data>
                <Icons.Question />
                <Icons.QuestionLight type="primary" />
              </Container.Data>
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
              <Container.Data>
                <Icons.Doc />
                <Icons.Doc />
              </Container.Data>
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
