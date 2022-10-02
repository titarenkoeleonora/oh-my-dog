import { FC, ReactNode, SyntheticEvent } from 'react';

import { ButtonWrapper } from './styles';

type Variant = 'primary' | 'secondary';

interface Props {
  children: ReactNode;
  variant?: Variant,
  onClick: (evt: SyntheticEvent<HTMLButtonElement>) => void;
};

export const Button: FC<Props> = ({ children, variant = 'primary', onClick }): JSX.Element => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
};
