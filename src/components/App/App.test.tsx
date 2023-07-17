import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given a App component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should show a heading with the title 'sushi & go", () => {
      const expectedTitle = "Sushi & Go";

      render(<App />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
