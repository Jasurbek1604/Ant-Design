import React from "react";

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
    </div>
  );
};

export default Layout;
