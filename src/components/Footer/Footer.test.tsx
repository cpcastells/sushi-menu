import { vi } from "vitest";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    test("Then it should show a button with text 'Order' within business hours", () => {
      const buttonText = "Order";
      const date = new Date(2000, 1, 1, 13);
      vi.setSystemTime(date);

      render(<Footer />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should not show a button with text 'Order' outside of business hours", () => {
      const buttonText = "Order";
      const date = new Date(2000, 1, 1, 6);
      vi.setSystemTime(date);

      render(<Footer />);

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).not.toBeInTheDocument();
    });
  });
});
