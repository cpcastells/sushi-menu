import { render, screen } from "@testing-library/react";
import Sushi from "./Sushi";
import sushiData from "../../data/sushiInfo";

describe("Given a Sushi component,", () => {
  describe("When it is rendered,", () => {
    test("Then it should show a heading with the title 'Uramaki Tiger", () => {
      const expectedTitle = "Uramaki Tiger";
      const uramakiMock = sushiData[0];

      render(<Sushi uramaki={uramakiMock} />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
