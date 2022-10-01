import { FC, ReactNode } from "react";
import { styled } from "../../../ui/theme";
import radioImage from '../../../images/pug.png'

const Label = styled.label`
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
    width: 25px;
    height: 25px;
    margin-right: 15px;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
  }


`;

const Input = styled.input`
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

type Props = {
  children: ReactNode;
  value: string;
  isActive?: boolean;
  name: string;
  onChange: () => void;
};

const RadioButton: FC<Props> = ({ children, value, isActive, name, onChange }) => {
  const id = `radio_${value}`;

  return (
    <>
      <Input id={id} name={name} checked={isActive} type='radio' onChange={onChange} />
      <Label htmlFor={id}>
        {children}
      </Label>
    </>
    
  );
 };
 
 export default RadioButton;