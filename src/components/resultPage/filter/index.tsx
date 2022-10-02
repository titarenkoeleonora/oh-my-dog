import { FC } from 'react';

import { RadioButton } from '../../shared/radioButton';
import { Prediction } from '../../../types';
import { Container } from './styles';

interface Props {
  predictions: Prediction[];
  activeFilterIndex: number;
  setActiveFilterIndex: (a: number) => void;
  onFilterChange: (index: number) => void;
}

export const Filter: FC<Props> = ({ predictions, activeFilterIndex, onFilterChange }): JSX.Element => {

 return (
  <Container>
    <p>
      We think it's:
    </p>
    {predictions.map(({ className, probability }, index) => (
      <RadioButton
        value={className}
        name='picturesFilter'
        key={index}
        isActive={activeFilterIndex === index}
        onChange={() => onFilterChange(index)}
      >
        {Math.floor(probability * 100)}% probability {className}
      </RadioButton>
    ))}
  </Container>
 );
};
