import { css } from 'styled-components';

import radioImage from '../../../images/pug.png';
import { styled } from '../../../ui/styles';

export const Label = styled.label(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;

    &::before {
      content: '';
      position: relative;
      display: flex;
      flex-shrink: 0;
      width: 25px;
      height: 25px;
      margin-right: 15px;
      border: 2px solid ${theme.colors.grey};
      border-radius: 50%;
      background-color: ${theme.colors.white};
    }
  `,
);

export const Input = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + ${Label} {
    &:before {
      border: none;
      background-color: transparent;
      background-image: url(${radioImage});
      background-size: cover;
      border-radius: 0;
    }
  }
`;
