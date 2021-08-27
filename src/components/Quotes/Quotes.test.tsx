import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/tests.helpers";

import Quotes from ".";
import { QuotesBottom, QuotesTop } from "./Quotes.styles";

describe("<Quotes />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'classname' prop features", () => {
      it("should render with classname when passed ", () => {
        const { container } = renderWithTheme(
          <Quotes className="myclass">children</Quotes>
        );

        expect(container.firstElementChild).toHaveClass("myclass");
        expect(container.firstElementChild?.className).toContain("myclass");
      });
    });
  });

  describe("'children' prop features", () => {
    it("should render a children correctly", () => {
      renderWithTheme(
        <Quotes>
          <h1>children</h1>
        </Quotes>
      );

      expect(
        screen.getByRole("heading", { name: /children/i })
      ).toBeInTheDocument();
    });

    it("should render two quotes correctly and positions", () => {
      const { container } = renderWithTheme(
        <Quotes>
          <h1>children</h1>
        </Quotes>
      );

      expect(container.firstElementChild?.childElementCount).toBe(3);

      const quotesTop = container.firstElementChild?.firstChild;
      expect(quotesTop).toHaveStyle({
        top: "-2rem",
        left: "-2rem",
      });

      const quotesBottom = container.firstElementChild?.lastChild;

      expect(quotesBottom).toHaveStyle({
        bottom: "-3rem",
        right: "-4rem",
      });
    });
  });

  describe("'isAnimation' prop features", () => {
    it("should not render animation if not is passed", () => {
      const { container } = renderWithTheme(<Quotes>children</Quotes>);

      const animationEl = container.firstElementChild;

      expect(animationEl).not.toHaveStyleRule("animation-duration", "1.7s", {
        modifier: `${QuotesTop}`,
      });

      expect(animationEl).not.toHaveStyleRule("animation-duration", "1.7s", {
        modifier: `${QuotesBottom}`,
      });
    });

    it("should render animation when passed", () => {
      const { container } = renderWithTheme(
        <Quotes isAnimation>children</Quotes>
      );

      const animationEl = container.firstElementChild;

      expect(animationEl).toHaveStyleRule("animation-duration", "1.7s", {
        modifier: `${QuotesTop}`,
      });

      expect(animationEl).toHaveStyleRule("animation-duration", "1.7s", {
        modifier: `${QuotesBottom}`,
      });
    });
  });
});
