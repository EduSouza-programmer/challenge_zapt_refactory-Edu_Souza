import styled, { css, keyframes, Keyframes } from "styled-components";

import typography from "@/components/Typography";
import Cta from "@/components/Cta";

import { WrapperProps } from "./Welcome.types";

export const Content = styled.div<WrapperProps>`
  ${({ theme }) => css`
    background-color: ${theme.palette.page.background.primary.main};
    height: 100%;
    border-radius: ${theme.borderRadius[1]};

    padding: ${theme.spacings.small} ${theme.spacings.xsmall}
      calc(${theme.spacings.large} + 7px);

    margin: 0 -4.3rem 0 -2.3rem;

    ${theme.media.greaterThan("450")`
       display: flex;
       flex-direction: column;
       justify-content: center;
       padding: 0 ${theme.spacings.xsmall};
       height: 31rem;
    `}

    ${theme.media.greaterThan("530")`
        padding: 0 ${theme.spacings.medium};
        margin: 0;
    `}


    ${theme.media.greaterThan("945")`
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}

    ${theme.media.greaterThan("1170")`
       padding: 0 ${theme.spacings.huge};

    `}
  `}
`;

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    position: relative;

    height: 31rem;
    width: 41.2rem;
    margin-right: -${theme.spacings.medium};

    ${theme.media.greaterThan("1170")`
      margin-right: -${theme.spacings.huge};

    `}
  `}
`;

export const Title = styled(typography).attrs(
  ({ size = "xlarge", color = "black" }) => ({
    size,
    color,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    text-align: center;

    margin-bottom: ${theme.spacings.xsmall};
    &::after {
      content: ",";
    }

    ${theme.media.greaterThan("530")`
      text-align: left;

    `}
  `}
`;

export const Message = styled(typography).attrs(
  ({ forwardedAs = "p", size = "xsmall" }) => ({
    forwardedAs,
    size,
  })
)`
  ${({ theme }) => css`
    color: ${theme.palette.text.gray.main};
    margin-bottom: ${theme.spacings.xsmall};
    line-height: ${theme.typography.lineHeight.xcompact};

    ${theme.media.greaterThan("350")`
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}

    `}

    ${theme.media.greaterThan("450")`
      line-height: ${theme.typography.lineHeight.normal};
    `}

    ${theme.media.greaterThan("650")`
      margin-bottom: ${theme.spacings.small};
      width: 90%;


    `}

    ${theme.media.greaterThan("1170")`
      width: 85%;

    `}
  `}
`;

export const Question = styled(typography).attrs(
  ({ forwardedAs = "p", size = "small", color = "black" }) => ({
    forwardedAs,
    size,
    color,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.semiBold};
    margin-bottom: calc(${theme.spacings.xxsmall} - 2px);
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.greaterThan("450")`
        flex-direction: row;
        justify-content: space-evenly;
    `}

    ${theme.media.greaterThan("530")`
      justify-content: left;
    `}
  `}
`;

export const Button = styled(Cta).attrs(
  ({ color = "primary", size = "large", forwardedAs = "a" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    margin-top: calc(${theme.spacings.xsmall} - 6px);

    ${theme.media.greaterThan("530")`
        &:nth-child(2) {
          margin-left: ${theme.spacings.xsmall};
        }
    `}
  `}
`;

export const MessageFooter = styled(typography).attrs(
  ({ forwardedAs = "footer", size = "xxsmall" }) => ({ forwardedAs, size })
)`
  ${({ theme }) => css`
    color: ${theme.palette.text.gray.main};
    line-height: ${theme.typography.lineHeight.xcompact};
    margin-top: ${theme.spacings.xxsmall};
    margin-left: -7px;
    max-width: calc(100% - 25px);

    ${theme.media.greaterThan("350")`
       ${theme.modifiers.TYPOGRAPHY.sizes.xsmall(theme)}
       max-width: calc(100% - 62px);

    `}

    ${theme.media.greaterThan("530")`
        margin-left: 0;
        margin-top: ${theme.spacings.xsmall};
    `}
  `}
`;

export const Link = styled(Cta).attrs(
  ({
    size = "xxsmall",
    color = "none",
    appearance = "link",
    forwardedAs = "a",
  }) => ({
    size,
    color,
    appearance,
    forwardedAs,
  })
)``;

const entranceCard = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }

`;

const modifiers = {
  playAnimation: (name: Keyframes) => css`
    animation-duration: 0.6s;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-fill-mode: both;
    animation-delay: 1s;

    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${name};
    }
  `,
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ isAnimation }) => css`
    max-width: 130rem;
    padding: 2.5rem 4.3rem 0rem 2.3rem;

    ${MessageFooter},
    ${Content} {
      ${isAnimation && modifiers.playAnimation(entranceCard)}
    }
  `}
`;
