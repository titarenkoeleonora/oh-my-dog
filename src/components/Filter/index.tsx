import { FC } from 'react';
import RadioButton from '../shared/radioButton';
import { TPrediction } from '../../types';
import { Container, Title } from './styles';

type TProps = {
  predictions: TPrediction[];
  activeFilterIndex: number;
  setActiveFilterIndex: (a: number) => void;
  onFilterChange: (index: number) => void;
}

const Filter: FC<TProps> = ({ predictions, activeFilterIndex, setActiveFilterIndex, onFilterChange }) => {

 return (
  <Container>
    <Title>
      We think that it's:
    </Title>
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

export default Filter;