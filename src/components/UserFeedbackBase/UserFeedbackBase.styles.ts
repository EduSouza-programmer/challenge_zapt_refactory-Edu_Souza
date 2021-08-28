import styled, { css, DefaultTheme } from "styled-components";

import typography from "@/components/Typography";

import { WrapperImageProps, TextsProps } from "./UserFeedbackBase.types";

export const modifiers = {
  sizes: {
    xsmall: () => css`
      width: 3.6rem;
      height: 3.6rem;

      border-width: 0.1rem;
      border-style: solid;
    `,
    small: () => css`
      width: 4.2rem;
      height: 4.2rem;

      border-width: 0.15rem;
    `,
    medium: () => css`
      width: 6.4rem;
      height: 6.4rem;

      border-width: 0.2rem;
    `,

    large: () => css`
      width: 8.6rem;
      height: 8.6rem;
      border-width: 0.3rem;
    `,
  },

  borderColors: {
    white: (theme: DefaultTheme) => css`
      border-color: ${theme.palette.page.white.main};
    `,
    blue: (theme: DefaultTheme) => css`
      border-color: ${theme.palette.page.primary.main};
    `,
  },

  colors: {
    white: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.white.main};
    `,
    blue: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.blue.dark};
    `,
  },
} as const;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperImage = styled.div<WrapperImageProps>`
  ${({ theme, size, borderColor }) => css`
    position: relative;
    border-radius: 50%;
    border-style: solid;

    ${!!borderColor && modifiers.borderColors[borderColor](theme)}
    ${!!size && modifiers.sizes[size]}

    img {
      border-radius: 50%;
    }
  `}
`;

export const UserName = styled(typography).attrs(({ forwardedAs = "h3" }) => ({
  forwardedAs,
}))<TextsProps>`
  ${({ theme, size, color }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    margin-left: ${theme.spacings.xsmall};

    ${!!size && theme.modifiers.TYPOGRAPHY.sizes[size](theme)}

    ${!!color && modifiers.colors[color](theme)}
  `}
`;

export const Region = styled(typography).attrs(
  ({ forwardedAs = "span", size = "xxsmall" }) => ({
    forwardedAs,
    size,
  })
)<TextsProps>`
  ${({ theme, color }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    margin-left: ${theme.spacings.xsmall};
    opacity: 0.8;

    ${!!color && modifiers.colors[color](theme)}
  `}
`;
