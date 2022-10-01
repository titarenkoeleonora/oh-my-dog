import { FC, ReactNode, SyntheticEvent } from "react";
import { styled, theme } from "../../../ui/theme";

type TVariant = 'primary' | 'secondary';

type Props = {
  children: ReactNode;
  variant?: TVariant,
  onClick: (evt: SyntheticEvent<HTMLButtonElement>) => void;
};

const colors: Record<TVariant, { background: string, border: string, text: string, hoverBg: string}> = {
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

const ButtonWrapper = styled.button<{ variant: TVariant }>`
  padding: 5px 20px;
  background-color: ${({ variant }) => colors[variant].background};
  border: 1px solid ${({ variant }) => colors[variant].border};
  color: ${({ variant }) => colors[variant].text};
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${({ variant }) => colors[variant].hoverBg};
  }
`;

const Button: FC<Props> = ({ children, variant = 'primary', onClick}) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
};

export default Button;