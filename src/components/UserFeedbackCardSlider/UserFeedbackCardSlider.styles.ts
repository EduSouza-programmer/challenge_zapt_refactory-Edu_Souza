import styled, { css } from "styled-components";

import slider from "@/components/Slider";
import cta from "@/components/Cta";

export const Slider = styled(slider)`
  ${({ theme }) => css`
    overflow: hidden;

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
      cursor: pointer;
    }

    ${theme.media.greaterThan("600")`
       .slick-list {
        margin: 0;
        margin-right: -${theme.spacings.xsmall}
      }
    `}

    ${theme.media.greaterThan("769")`
       .slick-list {
        margin-left: ${theme.spacings.small};
        margin-right: -${theme.spacings.small};
      }
    `}

    ${theme.media.greaterThan("1100")`
         .slick-slide > div {
          margin: 0 ${theme.spacings.xsmall};

        }

       .slick-list {
        margin: 0 calc(${theme.spacings.large} + 5px);
      }

    `}


    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.medium};

      li {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background-color: ${theme.palette.page.primary.main};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        transform: scale(0.8);

        transition: transform ${theme.time.fast} ease-in-out;

        &:not(.slick-active) {
          background-color: ${theme.palette.page.blue.main};
          opacity: 10%;
        }

        &.slick-active {
          border-radius: 50%;
          transform: scale(1);
        }
      }
      button {
        opacity: 0;
        width: 0.7rem;
        height: 0.7rem;
      }
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;

export const Previous = styled(cta).attrs(
  ({
    size = "xxsmall",
    color = "white",
    appearance = "button",
    icon = {
      listOfChoices: "ArrowBackIos",
      color: "blue",
      size: "xsmall",
      "aria-label": "voltar imagem",
    },
  }) => ({
    size,
    icon,
    color,
    appearance,
  })
)`
  ${({ theme }) => css`
    position: absolute;
    display: flex !important;
    place-items: center;
    top: calc(50% - 2.4rem);
    left: 4.1rem;
    transform: translate(0, -50%) scale(0.9);
    z-index: ${theme.zIndex.base};
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};

    width: 5.5rem;
    height: 8.4rem;

    border-bottom-right-radius: 8.4rem;
    border-top-right-radius: 8.4rem;

    transition: transform ${theme.time.fast} ease-in-out;

    &:focus {
      box-shadow: none;
      border: solid transparent;
    }
    &:active {
      transform: translate(0, -50%) scale(1);
    }
  `}
`;

export const Next = styled(cta).attrs(
  ({
    size = "xxsmall",
    color = "white",
    appearance = "button",
    icon = {
      listOfChoices: "ArrowForwardIos",
      color: "blue",
      size: "xsmall",
      "aria-label": "proxima imagem",
    },
  }) => ({
    size,
    icon,
    color,
    appearance,
  })
)`
  ${({ theme }) => css`
    position: absolute;
    display: flex !important;
    place-items: center;
    top: calc(50% - 2.4rem);
    right: 4rem;
    transform: translate(0, -50%) scale(0.9);
    z-index: ${theme.zIndex.base};
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};

    width: 5.5rem;
    height: 8.4rem;

    border-top-left-radius: 8.4rem;
    border-bottom-left-radius: 8.4rem;

    transition: transform ${theme.time.fast} ease-in-out;

    &:focus {
      box-shadow: none;
      border: solid transparent;
    }

    &:active {
      transform: translate(0, -50%) scale(1);
    }
  `}
`;
