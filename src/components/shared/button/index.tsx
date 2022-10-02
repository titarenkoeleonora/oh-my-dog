import { FC, ReactNode, SyntheticEvent } from 'react';

import { ButtonWrapper } from './styles';

type Variant = 'primary' | 'secondary';
interface Properties {
  children: ReactNode,
  variant?: Variant,
  onClick: (evt: SyntheticEvent<HTMLButtonElement>) => void,
};

export const Button: FC<Properties> = ({ children, variant = 'primary', onClick }): JSX.Element => (
  <ButtonWrapper variant={variant} onClick={onClick}>
    {children}
  </ButtonWrapper>
);
