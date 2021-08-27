import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import Welcome from ".";
import Image from "./Image";
import * as S from "./Image/Image.styles";
import { Content, MessageFooter } from "./Welcome.styles";
import mock from "./Welcome.mock";

describe("<Welcome />", () => {
  describe("|-html attributes general features", () => {
    describe("'className' prop features", () => {
      it("should render with classname when passed", () => {
        const { container } = renderWithTheme(
          <Welcome className="myclass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myclass");
        expect(container.firstElementChild?.className).toContain("myclass");
      });
    });
  });

  describe("'userName' prop features", () => {
    it("should render userName correctly", () => {
      renderWithTheme(
        <Welcome userName={mock.userName} message={mock.message} />
      );

      expect(
        screen.getByRole("heading", { name: /bem vindo marcio/i })
      ).toBeInTheDocument();
    });

    it("should render the username with the html h2 tag", () => {
      const { container } = renderWithTheme(
        <Welcome userName={mock.userName} message={mock.message} />
      );

      expect(container.querySelector("h2")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: `Bem vindo ${mock.userName}` })
          .tagName
      ).toEqual("H2");
    });
  });

  describe("'message' prop features", () => {
    it("should render message correctly", () => {
      renderWithTheme(
        <Welcome message={mock.message} userName={mock.userName} />
      );

      expect(screen.getByText(mock.message)).toBeInTheDocument();
    });
  });

  describe("'isAnimation' prop features", () => {
    it("should not render animation if not is passed", () => {
      const { container } = renderWithTheme(
        <Welcome userName={mock.userName} message={mock.message} />
      );

      const animationEl = container.firstElementChild;

      expect(animationEl).not.toHaveStyleRule("animation-duration", "0.6s", {
        modifier: `${Content}`,
      });
    });

    it("should render animation when passed", () => {
      const { container } = renderWithTheme(
        <Welcome isAnimation userName={mock.userName} message={mock.message} />
      );

      const animationEl = container.firstElementChild;

      expect(animationEl).toHaveStyleRule("animation-duration", "0.6s", {
        modifier: `${Content}`,
      });

      expect(animationEl).toHaveStyleRule("animation-duration", "0.6s", {
        modifier: `${MessageFooter}`,
      });
    });
  });
});

describe("<Image />", () => {
  describe("'isAnimations' props features", () => {
    it("should not render animation if not is passed", () => {
      const { container } = renderWithTheme(<Image />);

      const animationEl = container.firstElementChild;

      expect(animationEl).not.toHaveStyleRule("animation-duration", "0.5s", {
        modifier: `${S.Waves}`,
      });

      expect(animationEl).not.toHaveStyleRule("animation-duration", "1s", {
        modifier: `${S.Image}`,
      });

      expect(animationEl).not.toHaveStyleRule("animation-duration", "0.5s", {
        modifier: `${S.Curve}`,
      });

      expect(animationEl).not.toHaveStyleRule("animation-duration", "0.5s", {
        modifier: `${S.Circle}`,
      });
    });

    it("should render animation when passed", () => {
      const { container } = renderWithTheme(<Image isAnimation />);

      const animationEl = container.firstElementChild;

      expect(animationEl).toHaveStyleRule("animation-duration", "0.5s", {
        modifier: `${S.Waves}`,
      });

      expect(animationEl).toHaveStyleRule("animation-duration", "1s", {
        modifier: `${S.Image}`,
      });

      expect(animationEl).toHaveStyleRule("animation-duration", "0.5s", {
        modifier: `${S.Curve}`,
      });

      expect(animationEl).toHaveStyleRule("animation-duration", "0.5s", {
        modifier: `${S.Circle}`,
      });
    });
  });
});
