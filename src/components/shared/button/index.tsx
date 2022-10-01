import { FC, ReactNode, SyntheticEvent } from 'react';
import { ButtonWrapper } from './styles';

type TVariant = 'primary' | 'secondary';

type TProps = {
  children: ReactNode;
  variant?: TVariant,
  onClick: (evt: SyntheticEvent<HTMLButtonElement>) => void;
};

const Button: FC<TProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
};

export default Button;