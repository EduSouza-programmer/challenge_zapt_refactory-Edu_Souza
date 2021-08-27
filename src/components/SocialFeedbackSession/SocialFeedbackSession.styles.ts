import styled, { css } from "styled-components";

import socialComments from "@/components/UserFeedbackSocialMedia";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 130rem;
    column-count: 1;
    padding: 0 ${theme.spacings.xxsmall};

    ${theme.media.greaterThan("350")`
      padding: 0 ${theme.spacings.xsmall};
    `}

    ${theme.media.greaterThan("600")`
      column-count: 2;

    `}

    ${theme.media.greaterThan("1100")`
      column-count: 3;
      padding: 0 ${theme.spacings.xsmall};
      column-gap: ${theme.spacings.small}
    `}
  `}
`;

export const SocialComments = styled(socialComments)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    max-width: 100%;

    ${theme.media.greaterThan("1100")`
       max-width: 38.4rem;
    `}
  `};
`;
