import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import UserFeedbackCard from ".";
import mock from "./UserFeebackCard.mock";
import { UserFeedbackCardProps } from "./UserFeedbackCard.types";

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
  title: "Components/UserFeedbackCard",
  component: UserFeedbackCard,
  argTypes: {
    image: {
      type: { required: true },
      description: "Card image background",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Image",
          detail: `type Image = {
            src: string;
            alt: string;
        }`,
        },
      },
    },

    user: {
      type: { required: true },
      description: "User feedback card",
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
  },
  args: {
    ...mock,
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
          "Lets define the story for our _UserFeedbackCard_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<UserFeedbackCardProps>;

export const Mobile: Story<UserFeedbackCardProps> = (args) => (
  <UserFeedbackCard {...args} />
);

export const Desktop: Story<UserFeedbackCardProps> = (args) => (
  <UserFeedbackCard {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const Example1: Story<UserFeedbackCardProps> = (args) => (
  <UserFeedbackCard {...args} />
);

Example1.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

Example1.args = {
  image: {
    src: "/img/cards/card_2.jpg",
    alt: "Uma mulher cozinhando com uma expressão de satisfação",
    dataBlur: "/img/cards/card_2.jpg",
  },

  user: {
    image: {
      src: "/img/users/avatar_5.jpg",
      alt: "Um casal abraçados e sorrindo",
      dataBlur: "/img/users/avatar_5.jpg",
    },
    size: "xsmall",
    borderColor: "white",
    name: "Henrique Souza",
    region: {
      city: "Recife",
      state: "Pernambuco",
    },
    color: "white",
    message:
      "Depois que você começa a usar produtos de qualidade é bem difícil voltar atrás...",
  },
};

export const Example2: Story<UserFeedbackCardProps> = (args) => (
  <UserFeedbackCard {...args} />
);

Example2.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

Example2.args = {
  image: {
    src: "/img/cards/card_5.webp",
    alt: "Uma senhora sorridente sentada, e sobre a mesa uma taça com champanhe",
    dataBlur: "/img/cards/card_5.webp",
  },

  user: {
    image: {
      src: "/img/users/avatar_6.jpg",
      alt: "Uma moça ruiva sorrindo",
      dataBlur: "/img/users/avatar_6.jpg",
    },
    size: "xsmall",
    borderColor: "white",
    name: "Josefa Maria",
    region: {
      city: "Josefa Maria",
      state: "Salvador",
    },
    color: "white",
    message:
      "Desde que conheci gostei demais e pretendo ser freguesa por muito tempo. Gosto da praticidade em comprar e receber os produtos pagando menos. Meus favoritos são os legumes e verduras orgânicos. São frescos, saborosos e saudáveis.",
  },
};
