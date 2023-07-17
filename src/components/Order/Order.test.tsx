import { render, screen } from "@testing-library/react";
import Order from "./Order";

describe("Given a Order component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should show a button with the text 'Order", () => {
      const expectedText = "Order";
      const openHour = 10;
      const closeHour = 22;

      render(<Order openHour={openHour} closeHour={closeHour} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
