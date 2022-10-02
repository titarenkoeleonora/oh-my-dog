import { css } from 'styled-components';

import { styled, theme } from '../../../ui/styles';

type TVariant = 'primary' | 'secondary';

const colors: Record<
  TVariant,
  { background: string; border: string; text: string; hoverBg: string }
> = {
  primary: {
    background: theme.colors.blue,
    border: 'transparent',
    text: theme.colors.white,
    hoverBg: theme.colors.darkBlue,
  },
  secondary: {
    background: 'transparent',
    border: theme.colors.blue,
    text: theme.colors.black,
    hoverBg: theme.colors.blue,
  },
};

interface ButtonWrapperProps {
  variant: TVariant;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>(
  ({ variant }) => css`
    padding: 5px 20px;
    background-color: ${colors[variant].background};
    border: 1px solid ${colors[variant].border};
    color: ${colors[variant].text};
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: ${colors[variant].hoverBg};
    }
  `,
);
