import styled, { css, keyframes, Keyframes } from "styled-components";

import { WrapperProps } from "./Quotes.types";

const entranceQuotesTop = keyframes`
  0% {
    border-radius: 50%;
    top: -65%;
    left: 52%;
    transform: translateY(-65%) scale(1.3);
  }

 30% {
    top: 65%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: translateY(150%) rotate(180deg) scale(1);
  }

  50% {
    left: 30%;
    top: 30%;
    transform: translateY(-50%) rotate(-180deg) scale(1.3);
  }

  100% {
    left: -2rem;
    top: -2rem;
    transform: translateY(0) rotate(360deg) scale(1);
  }
`;

const entranceQuotesBottom = keyframes`
  0% {
    border-radius: 50%;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7);
  }

  30% {

    top: 50%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: translateY(150%) rotate(-180deg) scale(1);
  }

  50% {
    bottom:30%;
    top:50%;
    right: 41%;
    transform: translate(150%, -50%) rotate(180deg) scale(0.7);
  }



  100% {
    right: -4rem;
    bottom: -3rem;
    transform: translateY(0) rotate(360deg) scale(1);
  }
`;

const entranceQuotesBottomMobile = keyframes`
   0% {
    border-radius: 50%;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7);
  }

  30% {

    top: 50%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: translateY(150%) rotate(-180deg) scale(1);
  }

  50% {
    bottom:30%;
    top:50%;
    right: 31%;
    transform: translate(50%, -50%) rotate(180deg) scale(0.7);
  }



  100% {
    right: -4rem;
    bottom: -3rem;
    transform: translateY(0) rotate(360deg) scale(1);
  }

`;

const Quotes = styled.div`
  position: absolute;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;

  transform: scale(1);

  transition: all 0.2s ease;

  &:active {
    transform: scale(1.1);
  }
`;

const modifiers = {
  playAnimation: (name: Keyframes) => css`
    animation-duration: 1.7s;
    animation-timing-function: ease-in-out;
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${name};
    }
  `,
};

export const QuotesTop = styled(Quotes)`
  ${({ theme }) => css`
    background-color: ${theme.palette.page.secondary.main};
    width: 4.2rem;
    height: 4.2rem;
    top: -2rem;
    left: -2rem;
    z-index: calc(${theme.zIndex.menu} + 1);

    ${theme.media.greaterThan("590")`
      width: 6.2rem;
      height: 6.2rem;

    `}
  `}
`;

export const QuotesBottom = styled(Quotes)`
  ${({ theme }) => css`
    background-color: ${theme.palette.page.primary.main};
    width: 6.5rem;
    height: 6.5rem;
    bottom: -3rem;
    right: -4rem;
    z-index: ${theme.zIndex.menu};

    ${theme.media.greaterThan("590")`
      width: 10rem;
      height: 10rem;

    `}
  `}
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isAnimation }) => css`
    position: relative;

    ${QuotesTop} {
      ${isAnimation && modifiers.playAnimation(entranceQuotesTop)}
    }

    ${QuotesBottom} {
      ${isAnimation && modifiers.playAnimation(entranceQuotesBottomMobile)}

      ${theme.media.greaterThan("945")`
          ${isAnimation && modifiers.playAnimation(entranceQuotesBottom)}

      `}
    }
  `}
`;
