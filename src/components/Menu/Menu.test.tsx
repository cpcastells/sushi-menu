import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Given a Menu component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should show a heading with the title 'Our Uramakis", () => {
      const expectedTitle = "Our Uramakis";

      render(<Menu />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
