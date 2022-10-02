import { FC, ReactNode, SyntheticEvent } from 'react';

import { ButtonWrapper } from './Button.styles';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  onClick(evt: SyntheticEvent<HTMLButtonElement>): void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}): JSX.Element => (
  <ButtonWrapper variant={variant} onClick={onClick}>
    {children}
  </ButtonWrapper>
);
