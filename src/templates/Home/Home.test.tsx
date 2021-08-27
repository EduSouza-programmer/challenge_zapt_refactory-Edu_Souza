/* eslint-disable import/no-unresolved */
import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";
// import { mediaQueries } from "@/utils/theme/theme.helpers";

// import theme from "@/styles/themes/main.theme";

import Home from ".";
import mock from "./home.mock";

jest.mock("@/components/Welcome", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Welcome" />;
    },
  };
});

jest.mock("@/components/UserFeedbackCardSlider", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock UserFeedbackCardSlider" />;
    },
  };
});

jest.mock("@/components/SocialFeedbackSession", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SocialFeedbackSession" />;
    },
  };
});

describe("<Home />", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  describe("'welcome' prop features", () => {
    it("should render the component Welcome correctly", () => {
      renderWithTheme(<Home {...mock} />);

      expect(screen.getByTestId(/mock welcome/i)).toBeInTheDocument();
    });
  });

  describe("'userFeedbackSlider' prop features", () => {
    it("should render the component UserFeedbackCardSlider correctly", () => {
      renderWithTheme(<Home {...mock} />);

      expect(
        screen.getByTestId(/mock UserFeedbackCardSlider/i)
      ).toBeInTheDocument();
    });
  });

  describe("'socialFeedback' prop features", () => {
    it("should render the component SocialFeedbackSession correctly", () => {
      renderWithTheme(<Home {...mock} />);

      expect(
        screen.getByTestId(/mock SocialFeedbackSession/i)
      ).toBeInTheDocument();
    });
  });
});
