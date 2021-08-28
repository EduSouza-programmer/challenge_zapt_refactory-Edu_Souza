import { UserFeedbackCardProps } from "./UserFeedbackCard.types";

export default {
  image: {
    src: "./img/cards/card_1.jpg",
    alt: "Uma mulher cozinhando com uma expressão de satisfação",
    dataBlur: "./img/cards/card_1.jpg",
  },

  user: {
    image: {
      src: "./img/users/avatar_2.jpg",
      alt: "Um jovem moça de cabelos curtos com uma expressão seria e olhar sereno",
      dataBlur: "./img/users/avatar_2.jpg",
    },
    size: "xsmall",
    borderColor: "white",
    name: "Patricia Godoy",
    region: {
      city: "São Paulo",
      state: "São Paulo",
    },
    color: "white",
    message:
      "Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal",
  },
} as UserFeedbackCardProps;
