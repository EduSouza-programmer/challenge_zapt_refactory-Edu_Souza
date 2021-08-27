import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SocialFeedbackSession from ".";
import mock from "./SocialFeedbackSession.mock";

jest.mock("@/components/UserFeedbackSocialMedia", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SocialComments" />;
    },
  };
});

describe("<SocialFeedbackSession />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render className when passed", () => {
        const { container } = renderWithTheme(
          <SocialFeedbackSession comments={mock} className="myClass" />
        );

        const tagEl = container.firstElementChild;

        expect(tagEl).toHaveClass("myClass");
      });
    });
  });

  describe("'socialComments' prop features", () => {
    it("should render userFeedbacks correctly", () => {
      renderWithTheme(<SocialFeedbackSession comments={mock} />);

      const socialComments = screen.getAllByTestId(/mock socialcomments/i);

      expect(socialComments.length).toBe(9);
    });
  });
});
