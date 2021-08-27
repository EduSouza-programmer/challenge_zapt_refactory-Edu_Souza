import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import UserFeedbackSocialMedia from ".";
import { UserFeedbackSocialMediaProps } from "./UserFeedbackSocialMedia.types";
import mock from "./UserFeedbackSocialMedia.mock";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/UserFeedbackSocialMedia",
  component: UserFeedbackSocialMedia,
  argTypes: {
    user: {
      description: "User feedback social media",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "UserFeedbackBaseProps",
          detail: `(alias) type UserFeedbackBaseProps = {
            image?: Image | undefined;

            size?: ${details(modifiers.USERFEEDBACKBASE.sizes)};

            borderColor?: ${details(modifiers.USERFEEDBACKBASE.borderColors)};

            name?: string | undefined;

            region?: Region | undefined;

            color?: ${details(modifiers.USERFEEDBACKBASE.colors)};

            message: string;
        }`,
        },
      },
    },

    isAnimation: {
      description: "Animation feedback",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: `true | false`,
        },
      },
    },
  },
  args: {
    user: mock.user,
    isAnimation: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
    controls: { sort: "requiredFirst" },
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _UserFeedbackSocialMedia_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<UserFeedbackSocialMediaProps>;

export const Mobile: Story<UserFeedbackSocialMediaProps> = (args) => (
  <UserFeedbackSocialMedia {...args} />
);

export const Desktop: Story<UserFeedbackSocialMediaProps> = (args) => (
  <UserFeedbackSocialMedia {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
