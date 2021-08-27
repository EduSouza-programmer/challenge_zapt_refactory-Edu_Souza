/* eslint-disable import/no-unresolved */
import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import UserFeedbackCardSlider from ".";
import mock from "./UserFeedbackCardSlider.mock";

jest.mock("@/components/UserFeedbackCard", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock UserFeedbackCard" />;
    },
  };
});

describe("<UserFeedbackCardSlider />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'classname' prop features", () => {
      it("should render classname when passed", () => {
        const { container } = renderWithTheme(
          <UserFeedbackCardSlider feedbackCards={mock} className="myClass" />
        );

        const wrapperSlider = container.firstElementChild;
        expect(wrapperSlider).toHaveClass("myClass");
      });
    });
  });

  describe("'feedbackCards' prop features", () => {
    it("should render feedbackcards correctly", () => {
      renderWithTheme(<UserFeedbackCardSlider feedbackCards={mock} />);

      const cards = screen.getAllByTestId(/mock userfeedbackcard/i);
      expect(cards.length).toBe(6);
    });
  });
});
