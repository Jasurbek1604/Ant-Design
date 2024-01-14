import React from "react";

const Divider = () => {
  return (
    <div>
      <div className="title">Divider</div>
      <div className="description">
        A divider line separates different content.
      </div>
      <div className="example">When To Use</div>
      <ul className="ul">
        <li>Divide sections of article.</li>
        <li>
          Divide inline text and links such as the operation column of table.
        </li>
      </ul>
      <div className="example">Examples</div>
    </div>
  );
};

export default Divider;
