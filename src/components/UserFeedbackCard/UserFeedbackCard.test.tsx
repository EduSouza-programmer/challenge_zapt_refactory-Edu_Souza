import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import UserFeedbackCard from ".";
import mock from "./UserFeebackCard.mock";

jest.mock("@/components/UserFeedbackBase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock User" />;
    },
  };
});

describe("<UserFeedbackCard />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'classname' prop features", () => {
      it("should render classname when passed", () => {
        const { container } = renderWithTheme(
          <UserFeedbackCard className="myclass" {...mock} />
        );

        const wrapper = container.firstElementChild;

        expect(wrapper).toHaveClass("myclass");
        expect(wrapper?.className).toContain("myclass");
      });
    });
  });

  describe("'image' prop features", () => {
    it("should render image correctly", () => {
      renderWithTheme(
        <UserFeedbackCard
          user={mock.user}
          image={{ src: mock.image.src, alt: mock.image.alt }}
        />
      );

      expect(
        screen.getByRole("img", { name: mock.image.alt })
      ).toBeInTheDocument();
      expect(screen.getByAltText(mock.image.alt!)).toBeInTheDocument();
    });
  });

  describe("'user' prop features", () => {
    it("should render user correctly", () => {
      renderWithTheme(<UserFeedbackCard user={mock.user} image={mock.image} />);

      expect(screen.getByTestId(/mock user/i)).toBeInTheDocument();
    });

    it("should render user message correctly", () => {
      renderWithTheme(<UserFeedbackCard user={mock.user} image={mock.image} />);

      expect(screen.getByText(mock.user.message)).toBeInTheDocument();
    });

    it("should render user message with the html 'q' tag", () => {
      const { container } = renderWithTheme(
        <UserFeedbackCard user={mock.user} image={mock.image} />
      );

      const tagEl = container.querySelector("q");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.user.message).tagName).toEqual("Q");
    });
  });
});
