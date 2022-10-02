import { css } from 'styled-components';

import { styled } from '../../../ui/styles';

export const Title = styled.h1(
  ({ theme }) => css`
    margin: 0;
    margin-bottom: 20px;
    padding: 10px 30px;
    background-color: ${theme.colors.lightBlue};
    border: 2px solid ${theme.colors.blue};
    border-radius: 10px;
  `,
);
