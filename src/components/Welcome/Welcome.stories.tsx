import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import Welcome from ".";
import mock from "./Welcome.mock";
import { WelcomeProps } from "./Welcome.types";

const WrapperCenter = styled.div`
  display: grid;
  height: 100vh;
  max-width: 130rem;
  margin: 0 auto;
  align-items: center;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/Welcome",
  component: Welcome,
  argTypes: {
    userName: {
      type: { required: true },
      description: "Title welcome to the user",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
          detail: "(property) userName: string",
        },
      },
    },
    message: {
      type: { required: true },
      description: "Welcome message",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
          detail: "(property) message: string",
        },
      },
    },
    isAnimation: {
      description: "Animation the component",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
  },
  args: {
    ...mock,
    isAnimation: true,
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
          "Lets define the story for our _Welcome_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<WelcomeProps>;

export const Default: Story<WelcomeProps> = (args) => <Welcome {...args} />;

export const Desktop: Story<WelcomeProps> = (args) => <Welcome {...args} />;

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
