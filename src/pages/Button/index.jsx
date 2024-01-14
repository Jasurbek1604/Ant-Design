import React, { useState } from "react";
import Shablon from "../../components/Shablon";
import { Content, Icons } from "./style";
import Buttons from "../../components/Button";
import ButtonGroup from "../../components/Button/ButtonGroup";

const Button = () => {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(true);
  const [btn3, setBtn3] = useState(true);
  const items = [
    { id: 1, label: "Primary", onClick: () => alert("Jasurbek") },
    { id: 3, label: "..." },
  ];
  return (
    <div>
      <div className="title">Button</div>
      <div className="description">To trigger an operation.</div>
      <div className="example">When To Use</div>
      <div className="description">
        A button means an operation (or a series of operations). Clicking a
        button will trigger corresponding business logic. In Ant Design we
        provide 5 types of button.
      </div>
      <ul className="ul">
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
        <li>Default button: indicate a series of actions without priority.</li>
        <li>Dashed button: commonly used for adding more actions.</li>
        <li>Text button: used for the most secondary action.</li>
        <li>Link button: used for external links.</li>
        <li>
          <span className="code">danger</span>: used for actions of risk, like
          deletion or authorization.
        </li>
        <li>
          <span className="code">ghost</span>: used in situations with complex
          background, home pages usually.
        </li>
        <li>
          <span className="code">disabled</span>: when actions are not
          available.
        </li>
        <li>
          <span className="code">loading</span>: add loading spinner in button,
          avoiding multiple submits too.
        </li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Content.Row>
          <Shablon
            type={"Type"}
            desc={
              'There are <span class="code">primary</span> button, <span class="code">default</span> button, <span class="code">dashed</span> button, <span class="code">text</span> button and link button in antd.'
            }
          >
            <Content.Top>
              <Buttons type="primary">Primary Button</Buttons>
              <Buttons>Default Button</Buttons>
              <Buttons type="dashed">Dashed Button</Buttons>
              <Buttons type="text">Text Button</Buttons>
              <Buttons type="link">Link Button</Buttons>
            </Content.Top>
          </Shablon>
          <Shablon
            type={"Size"}
            desc={`Ant Design supports a default button <span class="code">size</span> as well as a <span class="code">large</span> and <span class="code">small</span> size. If a large or small button is desired, set the <span class="code">size</span> property to either large or small respectively. Omit the size property for a button with the default size.`}
          >
            <Content.Top>
              <Buttons type="primary">Primary </Buttons>
              <Buttons>Default </Buttons>
              <Buttons type="dashed">Dashed </Buttons>
              <Buttons type="link">Link </Buttons>
              <Buttons type="primary">
                <Icons.Download />
              </Buttons>
              <Buttons
                type="primary"
                style={{
                  borderRadius: "90px",
                  padding: "8px",
                  margin: 0,
                }}
              >
                <Icons.Download />
              </Buttons>
              <Buttons type="primary" style={{ borderRadius: "20px" }}>
                <Icons.Download />
              </Buttons>
              <Buttons type="primary" style={{ borderRadius: "20px" }}>
                <Icons.Download />
                Download
              </Buttons>
              <Buttons type="primary">
                <Icons.Download />
                Download
              </Buttons>
            </Content.Top>
          </Shablon>
          <Shablon
            type="Loading"
            desc={`A loading indicator can be added to a button by setting the <span class="code">loading</span> property on the <span class="code">Button<span>.`}
          >
            <Content.Top>
              <Buttons type="primary">
                <Icons.Spin /> Loading
              </Buttons>
              <Buttons type="primary" style={{ padding: "6px" }}>
                <Icons.Spin /> Loading
              </Buttons>
              <Buttons type="primary">
                <Icons.Spin />
              </Buttons>
              <Buttons
                type="primary"
                onClick={() => {
                  setBtn1(false);
                  setTimeout(() => setBtn1(true), 3000);
                }}
              >
                {btn1 ? (
                  "Click me!"
                ) : (
                  <>
                    <Icons.Spin /> Click me!
                  </>
                )}
              </Buttons>
              <Buttons
                type="primary"
                onClick={() => {
                  setBtn2(false);
                  setTimeout(() => setBtn2(true), 3000);
                }}
              >
                {btn2 ? (
                  <>
                    <Icons.Power /> Click me!
                  </>
                ) : (
                  <>
                    <Icons.Spin /> Click me!
                  </>
                )}
              </Buttons>
              <Buttons
                type="primary"
                onClick={() => {
                  setBtn3(false);
                  setTimeout(() => setBtn3(true), 3000);
                }}
              >
                {btn3 ? <Icons.Power /> : <Icons.Spin />}
              </Buttons>
            </Content.Top>
          </Shablon>
          <Shablon
            type="Ghost Button"
            desc={` <span class="code">ghost</span> property will make button's background transparent, it is commonly used in colored background.`}
          >
            <Content.Top
              style={{ background: "rgba(0,0,0,0.2)", padding: "15px" }}
            >
              <Buttons type={"ghostPrimary"}>Primary</Buttons>
              <Buttons type={"ghostDefault"}>Default</Buttons>
              <Buttons type={"ghostDashed"}>Dashed</Buttons>
              <Buttons type={"ghostDanger"}>Danger</Buttons>
            </Content.Top>
          </Shablon>
          <Shablon
            type={"Block Button"}
            desc={`<span class="code">block</span> property will make the button fit to its parent width.`}
          >
            <Content.Top $center="true">
              <Buttons type="primary">Primary Button</Buttons>
              <Buttons>Default Button</Buttons>
              <Buttons type="dashed">Dashed Button</Buttons>
              <Buttons type="disabled">Disabled Button</Buttons>
              <Buttons type="text">Text Button</Buttons>
              <Buttons type="link">Link Button</Buttons>
            </Content.Top>
          </Shablon>
        </Content.Row>
        <Content.Row>
          <Shablon
            type={"Icon"}
            desc={
              '<span class="code">Button</span> components can contain an <span class="code">Icon</span>. This is done by setting the <span class="code">icon</span> property or placing an <span class="code">Icon</span> component within the <span class="code">Button</span>. If you want specific control over the positioning and placement of the <span class="code">Icon</span>, then that should be done by placing the <span class="code">Icon</span> component within the <span class="code">Button</span> rather than using the icon property.'
            }
          >
            <Content.Top>
              <Buttons
                hoverText={"search"}
                style={{ borderRadius: "70px" }}
                type="primary"
              >
                <Icons.Search />
              </Buttons>
              <Buttons style={{ borderRadius: "50px" }} type="primary">
                A
              </Buttons>
              <Buttons type="primary">
                <Icons.Search /> Search
              </Buttons>
              <Buttons hoverText={"search"} style={{ borderRadius: "70px" }}>
                <Icons.SearchLight />
              </Buttons>
              <Buttons>
                <Icons.SearchLight /> Search
              </Buttons>
              <Buttons hoverText={"search"} style={{ borderRadius: "70px" }}>
                <Icons.SearchLight />
              </Buttons>
              <Buttons hoverText={"search"}>
                <Icons.SearchLight /> Search
              </Buttons>
              <Buttons
                hoverText={"search"}
                type="dashed"
                style={{ borderRadius: "70px" }}
              >
                <Icons.SearchLight />
              </Buttons>
              <Buttons type="dashed">
                <Icons.SearchLight /> Search
              </Buttons>
              <div className="btn-light">
                <Buttons>
                  <Icons.SearchLight />
                </Buttons>
              </div>
            </Content.Top>
          </Shablon>
          <Shablon
            type={"Disabled"}
            desc={`To mark a button as <span class="code">disabled</span>, add the disabled property to the <span class="code">Button</span>.`}
          >
            <div className="flex">
              <Buttons type="primary">Primary </Buttons>
              <Buttons type="disabled">Primary(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons>Default </Buttons>
              <Buttons type="disabled">Default(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="dashed">Dashed </Buttons>
              <Buttons type="dashedDisabled">Dashed(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="text">Text</Buttons>
              <Buttons type="textDisabled">Text(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="link">Link</Buttons>
              <Buttons type="linkDisabled">Link(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="primary">Href Primary </Buttons>
              <Buttons type="disabled">Href Primary(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="defaultDanger">Default Button</Buttons>
              <Buttons type="disabled">Danger Desault(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="dangerDashed">Danger Dashed</Buttons>
              <Buttons type="dashedDisabled">Danger Dashed(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="dangerText">Danger Text</Buttons>
              <Buttons type="textDisabled">Danger Text(disabled)</Buttons>
            </div>
            <div className="flex">
              <Buttons type="dangerLink">Danger Link</Buttons>
              <Buttons type="linkDisabled">Danger Link(disabled)</Buttons>
            </div>
            <div
              className="flex"
              style={{ background: "rgba(0,0,0,0.2)", padding: "15px" }}
            >
              <Buttons type={"ghostDefault"}>Ghost</Buttons>
              <Buttons type={"disabled"}>Ghost Disabled</Buttons>
            </div>
          </Shablon>
          <Shablon
            type={"Multiple Buttons"}
            desc={
              "If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button."
            }
          >
            <div className="flex">
              <Buttons type="primary">Primary</Buttons>
            </div>
            <div className="flex">
              <Buttons type="secondary">Secondary</Buttons>
            </div>
            <div className="flex">
              <ButtonGroup items={items} />
            </div>
          </Shablon>
          <Shablon
            type={"Danger Buttons"}
            desc={`<span class="code">danger</span> is a property of button after antd 4.0.`}
          >
            <Content.Top>
              <Buttons type="dangerPrimary">Primary Button</Buttons>
              <Buttons type="defaultDanger">Default Button</Buttons>
              <Buttons type="dangerDashed">Dashed Button</Buttons>
              <Buttons type="dangerText">Text Button</Buttons>
              <Buttons type="dangerLink">Link Button</Buttons>
            </Content.Top>
          </Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Button;
