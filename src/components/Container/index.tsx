import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc(${theme.spacings.huge} * 1.1);
  `}
`;
