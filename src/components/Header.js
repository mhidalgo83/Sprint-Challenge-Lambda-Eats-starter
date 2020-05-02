import React from "react";

const Header = (props) => {
  return <h1 className={props.className}>{props.children}</h1>;
};

export default Header;
