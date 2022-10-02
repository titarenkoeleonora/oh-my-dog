import { FC } from 'react';

import { Prediction } from '../../../types';
import { RadioButton } from '../../shared/RadioButton/RadioButton';
import { Container } from './Filter.styles';

interface FilterProps {
  predictions: Prediction[];
  activeFilterIndex: number;
  setActiveFilterIndex(activeFilterIndex: number): void;
  onFilterChange(index: number): void;
}

export const Filter: FC<FilterProps> = ({
  predictions,
  activeFilterIndex,
  onFilterChange,
}): JSX.Element => {
  const getTitle = (probability: number, className: string): string =>
    `${Math.floor(probability * 100)}% probability ${className}`;

  return (
    <Container>
      <p>We think it&apos;s:</p>
      {predictions.map(({ className, probability }, index) => (
        <RadioButton
          value={className}
          name="picturesFilter"
          key={index}
          isActive={activeFilterIndex === index}
          onChange={() => onFilterChange(index)}
        >
          {getTitle(probability, className)}
        </RadioButton>
      ))}
    </Container>
  );
};
