import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import Home from ".";
import { HomeProps } from "./Home.types";
import mock from "./home.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {
    welcome: {
      type: { required: true },
      description: "Component Welcome",
      control: { type: "null" },
    },
    userFeedbackSlider: {
      type: { required: true },
      description: "Component UserFeedbackCardSlider",
      control: { type: "null" },
    },
    socialFeedback: {
      type: { required: true },
      description: "Component SocialFeedbackSession",
      control: { type: "null" },
    },
  },
  args: {
    ...mock,
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
        component: "Lets define the story for our _Home_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<HomeProps>;

export const Mobile: Story<HomeProps> = (args) => <Home {...args} />;

export const Desktop: Story<HomeProps> = (args) => <Home {...args} />;

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
