import React from "react";
import { Content } from "../Button/style";
import Shablon from "../../components/Shablon";

const Layout = () => {
  return (
    <div>
      <div className="title">Layout</div>
      <div className="description">Handling the overall layout of a page.</div>
      <div className="example">Specification</div>
      <h4>Size</h4>
      <div className="description">
        The first level navigation is left aligned near a logo, and the
        secondary menu is right aligned.
      </div>
      <ul className="ul">
        <li>
          Top Navigation: the height of the first level navigation 64px, the
          second level navigation 48px.
        </li>
        <li>
          Top Navigation (for landing pages): the height of the first level
          navigation 80px, the second level navigation 56px.
        </li>
        <li>Calculation formula of a top navigation: 48+8n.</li>
        <li>Calculation formula of an aside navigation: 200+8n.</li>
      </ul>
      <h4>Interaction rules</h4>
      <ul className="ul">
        <li>
          The first level navigation and the last level navigation should be
          distinguishable by visualization;
        </li>
        <li>
          The current item should have the highest priority of visualization;
        </li>
        <li>
          When the current navigation item is collapsed, the style of the
          current navigation item is applied to its parent level;
        </li>
        <li>
          The left side navigation bar has support for both the accordion and
          expanding styles; you can choose the one that fits your case the best.
        </li>
      </ul>
      <div className="example">Examples</div>
      <Content>
        <Content.Row>
          <Shablon
            type="Basic structure"
            desc="Classic page layouts."
          ></Shablon>
          <Shablon
            type="Header-Content-Footer"
            desc="The most basic header-content-footer layout. Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. We always put contents in a fixed size navigation (eg: 1200px), the layout of the whole page is stable, it's not affected by viewing area. Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links."
          ></Shablon>
          <Shablon
            type="Header-Sider"
            desc="Both the top navigation and the sidebar, commonly used in documentation site."
          ></Shablon>
          <Shablon
            type="Header-Sider 2"
            desc="Both the top navigation and the sidebar, commonly used in application site."
          ></Shablon>
          <Shablon
            type="Sider"
            desc="Two-columns layout. The sider menu can be collapsed when horizontal space is limited. Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable. The level of the aside navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents."
          ></Shablon>
          <Shablon
            type="Costum trigger"
            desc="If you want to use a customized trigger, you can hide the default one by setting trigger={null}."
          ></Shablon>
          <Shablon
            type="Responsive"
            desc="Layout.Sider supports responsive layout. Note: You can get a responsive layout by setting breakpoint, the Sider will collapse to the width of collapsedWidth when window width is below the breakpoint. And a special trigger will appear if the collapsedWidth is set to 0."
          ></Shablon>
          <Shablon
            type="Fixed Header"
            desc="Fixed Header is generally used to fix the top navigation to facilitate page switching."
          ></Shablon>
          <Shablon
            type="Fixed Slider"
            desc="When dealing with long content, a fixed sider can provide a better user experience."
          ></Shablon>
        </Content.Row>
      </Content>
    </div>
  );
};

export default Layout;
