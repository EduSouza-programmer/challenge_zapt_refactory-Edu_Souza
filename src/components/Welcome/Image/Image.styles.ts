import styled, { css, keyframes, Keyframes } from "styled-components";

import { WrapperProps } from "../Welcome.types";

const entranceMask = keyframes`
  from {
      transform: translateX(101%);
    }
    to {
      transform: translateX(0px);
    }
`;

const scaleUP = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const imageEffect = keyframes`
  0% {
      transform: scale(1) translate(0, 0);
      transform-origin: 84% 84%;
    }
    50% {
      transform: scale(1.25) translate(20px, 15px);
      transform-origin: right bottom;
    }
`;

const modifiers = {
  playAnimation: (
    name: Keyframes,
    duration: string,
    timing: string,
    delay: string
  ) => css`
    animation-duration: ${duration};
    animation-timing-function: ${timing};
    animation-fill-mode: both;
    animation-delay: ${delay};
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${name};
    }
  `,
};

export const Waves = styled.path``;

export const Image = styled.image``;

export const Circle = styled.circle``;

export const Curve = styled.path``;

export const Wrapper = styled.svg<WrapperProps>`
  ${({ theme, isAnimation }) => css`
    border-radius: ${theme.borderRadius[1]};

    ${Waves} {
      ${isAnimation &&
      modifiers.playAnimation(entranceMask, "0.5s", "linear", "1s")}
    }

    ${Image} {
      ${isAnimation &&
      modifiers.playAnimation(imageEffect, "1s", "ease-out", "1s")}
    }

    ${Curve} {
      ${isAnimation &&
      modifiers.playAnimation(scaleUP, "0.5s", "linear", "1.3s")}
    }

    ${Circle} {
      ${isAnimation &&
      modifiers.playAnimation(scaleUP, "0.5s", "linear", "1.5s")}
    }
  `}
`;
