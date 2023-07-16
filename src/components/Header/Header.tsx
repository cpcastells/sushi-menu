import React from "react";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="main-title">Sushi & Go</h1>
    </HeaderStyled>
  );
};

export default Header;
