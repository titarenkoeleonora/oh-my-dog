import { FC, ReactNode } from 'react';

import { Input, Label } from './RadioButton.styles';

interface RadioButtonProps {
  children: ReactNode;
  value: string;
  isActive?: boolean;
  name: string;
  onChange(): void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  children,
  value,
  isActive,
  name,
  onChange,
}): JSX.Element => {
  const id = `radio_${value}`;

  return (
    <>
      <Input id={id} name={name} checked={isActive} type="radio" onChange={onChange} />
      <Label htmlFor={id}>{children}</Label>
    </>
  );
};
