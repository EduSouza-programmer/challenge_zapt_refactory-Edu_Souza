import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import UserFeedbackCardSlider from ".";
import mock from "./UserFeedbackCardSlider.mock";
import { UserFeedbackCardSliderProps } from "./UserFeedbackCardSlider.types";

const WrapperCenter = styled.div`
  max-width: 130rem;
  margin-top: 20rem;
  margin-left: auto;
  margin-right: auto;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/UserFeedbackCardSlider",
  component: UserFeedbackCardSlider,
  argTypes: {
    feedbackCards: {
      description: "User feedback card",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "UserFeedbackCardProps[]",
          detail: `(alias) type UserFeedbackCardProps = {
            image: Image;
            user: UserFeedbackBaseProps;

            type Image = {
              src: string;
              alt?: string | undefined;
              dataBlur?: string | undefined;
          }

          (alias) type UserFeedbackBaseProps = {
            image?: Image | undefined;

            size?: ${details(modifiers.USERFEEDBACKBASE.sizes)};

            borderColor?: ${details(modifiers.USERFEEDBACKBASE.borderColors)};

            name?: string | undefined;

            region?: Region | undefined;

            color?: ${details(modifiers.USERFEEDBACKBASE.colors)};

            message: string;
          }
        } `,
        },
      },
    },
  },
  args: {
    feedbackCards: mock,
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "custom-light",
    },
    layout: "fullscreen",
    controls: { sort: "requiredFirst" },
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _UserFeedbackCardSlider_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<UserFeedbackCardSliderProps>;

export const Mobile: Story<UserFeedbackCardSliderProps> = (args) => (
  <UserFeedbackCardSlider {...args} />
);

export const Desktop: Story<UserFeedbackCardSliderProps> = (args) => (
  <UserFeedbackCardSlider {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
