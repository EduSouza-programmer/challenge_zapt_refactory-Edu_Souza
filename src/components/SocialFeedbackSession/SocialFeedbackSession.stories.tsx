import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import SocialFeedbackSession from ".";
import { SocialFeedbackSessionProps } from "./SocialFeedbackSession.types";
import mock from "./SocialFeedbackSession.mock";

const WrapperCenter = styled.div`
  display: grid;
  justify-content: center;
  max-width: 130rem;
  margin: 5rem auto 5rem;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/SocialFeedbackSession",
  component: SocialFeedbackSession,
  argTypes: {
    comments: {
      description: "User comments",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "UserFeedbackSocialMediaProps[]",
          detail: `(alias) type UserFeedbackSocialMediaProps = {
            user: UserFeedbackBaseProps;
            isAnimation?: boolean;

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
        }`,
        },
      },
    },
  },
  args: {
    comments: mock,
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    controls: { sort: "requiredFirst" },
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _SocialFeedbackSession_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SocialFeedbackSessionProps>;

export const Mobile: Story<SocialFeedbackSessionProps> = (args) => (
  <SocialFeedbackSession {...args} />
);

export const Desktop: Story<SocialFeedbackSessionProps> = (args) => (
  <SocialFeedbackSession {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
