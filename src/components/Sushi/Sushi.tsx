import React from "react";
import uramakiData from "../../data/types";
import SushiStyled from "./SushiStyled";

interface SushiProps {
  uramaki: uramakiData;
}

const Sushi = ({ uramaki }: SushiProps): React.ReactElement => {
  return (
    <SushiStyled className={`uramaki ${uramaki.soldOut ? "sold-out" : ""}`}>
      <img
        src={uramaki.photoName}
        alt={uramaki.name}
        className="uramaki-picture"
      />
      <div className="uramaki-container">
        <h3 className="uramaki-title">{uramaki.name}</h3>
        <p className="uramaki-ingredients">{uramaki.ingredients}</p>
        <span className="uramaki-price">
          {uramaki.soldOut ? "SOLD OUT" : uramaki.price}
        </span>
      </div>
    </SushiStyled>
  );
};

export default Sushi;
