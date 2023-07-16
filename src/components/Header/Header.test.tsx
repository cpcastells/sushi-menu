import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should show a heading with the title 'sushi & go", () => {
      const expectedTitle = "Sushi & Go";

      render(<Header />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
