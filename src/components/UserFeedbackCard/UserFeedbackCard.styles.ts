import image from "next/image";
import styled, { css } from "styled-components";

import user from "@/components/UserFeedbackBase";
import * as S from "@/components/UserFeedbackBase/UserFeedbackBase.styles";
import typography from "@/components/Typography";

export const Wrapper = styled.div`
  position: relative;

  max-width: 58.8rem;
  max-height: 40rem;
`;

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    place-items: center;

    &::before {
      content: "";
      background: url("./img/effects/noise.svg");
      position: absolute;
      inset: 0;
      z-index: ${theme.zIndex.underBase};
      border-radius: ${theme.borderRadius[4]};
    }
  `}
`;

export const Image = styled(image).attrs(
  ({ width = 588, height = 400, placeholder = "blur" }) => ({
    width,
    height,
    placeholder,
  })
)`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius[4]};
  `}
`;

export const User = styled(user).attrs(({ size = "xsmall" }) => ({ size }))`
  ${({ theme }) => css`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: ${theme.zIndex.base};

    ${theme.media.greaterThan("350")`
        bottom: 1.6rem;
        left: 1.6rem;
    `}

    ${theme.media.greaterThan("530")`
        bottom: 2.4rem;
        left: 3.5rem;
      ${S.WrapperImage} {
        ${theme.modifiers.USERFEEDBACKBASE.sizes.small}
      }
      ${S.UserName} {
        ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}
      }
    `}
  `}
`;

export const Message = styled(typography).attrs(
  ({ size = "xsmall", forwardedAs = "q" }) => ({ size, forwardedAs })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: ${theme.typography.lineHeight.compact};
    width: 90%;
    position: absolute;
    bottom: 6.5rem;
    left: 1.5rem;
    z-index: ${theme.zIndex.base};

    ${theme.media.greaterThan("350")`
        bottom: 7rem;
        line-height: ${theme.typography.lineHeight.normal};
    `}

    ${theme.media.greaterThan("450")`
       ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}

    `}

     ${theme.media.greaterThan("530")`
        ${theme.modifiers.TYPOGRAPHY.sizes.large(theme)}
        line-height: ${theme.typography.lineHeight.reading};
        bottom: 9rem;
        left: 3.5rem;
        width: 80%;
    `}
  `}
`;
