import styled, { css } from "styled-components";

import typography from "@/components/Typography";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const TitleSection = styled(typography).attrs(
  ({ color = "black", size = "xlarge" }) => ({ color, size })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.light};
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};

    ${theme.media.greaterThan("990")`
         ${theme.modifiers.TYPOGRAPHY.sizes.huge(theme)}
      `}
  `}
`;
