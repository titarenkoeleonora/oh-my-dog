import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const MainBlock = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `,
);
