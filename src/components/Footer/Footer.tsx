import React from "react";
import FooterStyled from "./FooterStyled";
import Order from "../Order/Order";

const Footer = (): React.ReactElement => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <FooterStyled>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          Our doors are open for you from {openHour}:00 to {closeHour}:00.
        </p>
      )}
    </FooterStyled>
  );
};

export default Footer;
