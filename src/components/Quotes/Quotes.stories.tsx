import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import Quotes from ".";
import { QuotesProps } from "./Quotes.types";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

const Box = styled.div`
  max-width: 70rem;
  width: 50rem;
  height: 20rem;
  background-color: #434347;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/Quotes",
  component: Quotes,
  argTypes: {
    children: {
      type: { required: true },
      description: "Quotes children",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "React.ReactNode",
          detail:
            "type ReactNode = boolean | ReactChild | ReactFragment | ReactPortal | null | undefined",
        },
      },
    },

    isAnimation: {
      description: "Entrance animation",
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
    children: <Box />,
    isAnimation: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _Quotes_ component, good read.",
      },
    },
    controls: { sort: "requiredFirst" },
  },
  decorators: [defaultDecorator],
} as Meta<QuotesProps>;

export const Default: Story<QuotesProps> = (args) => <Quotes {...args} />;
