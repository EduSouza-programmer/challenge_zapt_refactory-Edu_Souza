import { UserFeedbackCardProps } from "@/components/UserFeedbackCard/UserFeedbackCard.types";

export default [
  {
    image: {
      src: "./img/cards/card_1.jpg",
      alt: "Uma jovem senhora cozinhando com uma expressão de satisfação",
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
  },

  {
    image: {
      src: "./img/cards/card_2.jpg",
      alt: "Um casal realizando atividades na cozinha de bem com a vida",
      dataBlur: "./img/cards/card_2.jpg",
    },

    user: {
      image: {
        src: "./img/users/avatar_5.jpg",
        alt: "Um casal abraçados e sorrindo",
        dataBlur: "./img/users/avatar_5.jpg",
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
  },
  {
    image: {
      src: "./img/cards/card_3.webp",
      alt: "Um homem tatuado cobrindo o rosto com uma pizza embalada a vaco",
      dataBlur: "./img/cards/card_3.webp",
    },

    user: {
      image: {
        src: "./img/users/avatar_1.jpg",
        alt: "Um casal abraçados e sorrindo",
        dataBlur: "./img/users/avatar_1.jpg",
      },
      size: "xsmall",
      borderColor: "white",
      name: "João Lira",
      region: {
        city: "São Gonçalo",
        state: "Rio de Janeiro",
      },
      color: "white",
      message:
        "É um facilitador enorme, uma ponte maravilhosa entre cliente e fornecedor!",
    },
  },
  {
    image: {
      src: "./img/cards/card_4.webp",
      alt: "Um homem tatuado cobrindo o rosto com uma pizza embalada a vaco",
      dataBlur: "./img/cards/card_4.webp",
    },

    user: {
      image: {
        src: "./img/users/avatar_4.jpg",
        alt: "Uma moça ruiva sorrindo",
        dataBlur: "./img/users/avatar_5.jpg",
      },
      size: "xsmall",
      borderColor: "white",
      name: "Vanessa Camargo",
      region: {
        city: "Minas gerais",
        state: "Betim",
      },
      color: "white",
      message:
        "O pessoal da zapt faz tudo bem feito. É muito bom quando tenho muitas vendas para entrega no mesmo local. Muitas vezes entrego para mais de 15 clientes em um só local.",
    },
  },
  {
    image: {
      src: "./img/cards/card_5.webp",
      alt: "Uma senhora sorridente sentada, e sobre a mesa uma taça com champanhe",
      dataBlur: "./img/cards/card_5.webp",
    },

    user: {
      image: {
        src: "./img/users/avatar_6.jpg",
        alt: "Uma moça ruiva sorrindo",
        dataBlur: "./img/users/avatar_6.jpg",
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
  },
  {
    image: {
      src: "./img/cards/card_6.webp",
      alt: "Uma mulher de cabelos longos escuros com uma expressão de seriendade",
      dataBlur: "./img/cards/card_6.webp",
    },

    user: {
      image: {
        src: "./img/users/avatar_3.jpg",
        alt: "Uma jovem senhora muito simpática e sorridente",
        dataBlur: "./img/users/avatar_3.jpg",
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
        "Gosto das pizzas congeladas do Agostino e das massas do Sentido do Gosto. Os descontos são muito bons! A compra em grupo é muito fácil e a entrega é sempre feita no horário.",
    },
  },
] as UserFeedbackCardProps[];
