import React from "react";
import sushiData from "../../data/sushiInfo";
import MenuStyled from "./MenuStyled";
import Sushi from "../Sushi/Sushi";

const Menu = (): React.ReactElement => {
  const sushiCollection = sushiData;

  return (
    <MenuStyled className="menu">
      <h2 className="menu-title">Our Uramakis</h2>
      <p className="menu-introduction">
        Authentic sushi experience. 6 artful uramaki varieties. All made
        in-house, all from sustainable sources, all mouthwateringly good.
      </p>
      <ul className="sushi">
        {sushiCollection.map((uramaki) => (
          <li key={uramaki.name}>
            <Sushi uramaki={uramaki} />
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
};

export default Menu;
