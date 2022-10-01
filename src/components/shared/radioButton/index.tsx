import { FC, ReactNode } from 'react';
import { Input, Label } from './styles';

type TProps = {
  children: ReactNode;
  value: string;
  isActive?: boolean;
  name: string;
  onChange: () => void;
};

const RadioButton: FC<TProps> = ({ children, value, isActive, name, onChange }) => {
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