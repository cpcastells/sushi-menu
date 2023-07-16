import React from "react";
import sushiData from "../../data/sushiInfo";
import MenuStyled from "./MenuStyled";

const Menu = (): React.ReactElement => {
  const sushiCollection = sushiData;

  return (
    <MenuStyled className="menu">
      <h2 className="menu-title">Our Uramakis</h2>
      <p className="menu-introduction">
        Authentic sushi experience. 6 artful uramaki varieties. All made
        in-house, all from sustainable sources, all mouthwateringly good.
      </p>
    </MenuStyled>
  );
};

export default Menu;
