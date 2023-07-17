import React from "react";
import OrderStyled from "./OrderStyled";

interface OrderProps {
  openHour: number;
  closeHour: number;
}

const Order = ({ openHour, closeHour }: OrderProps): React.ReactElement => {
  return (
    <OrderStyled className="order-container">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come to visit us or
        order online.
      </p>
      <button className="order">Order</button>
    </OrderStyled>
  );
};

export default Order;
