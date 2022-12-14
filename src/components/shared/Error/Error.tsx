import { FC, ReactNode } from 'react';

import pugBread from '../../../images/pug-bread.png';
import pugQuestions from '../../../images/pug-questions.png';
import { Container, Image } from './Error.styles';

interface ErrorProps {
  children: ReactNode;
  type?: string;
}

const getImage = (type: string): string => {
  switch (type) {
    case 'serverError':
      return pugBread;
    case 'validationError':
      return pugQuestions;

    default:
      return pugBread;
  }
};

export const Error: FC<ErrorProps> = ({ children, type = 'serverError' }): JSX.Element => {
  const imageAlt = type === 'validationError' ? 'Validation Error' : 'Server Error';

  return (
    <Container>
      <Image src={getImage(type)} alt={imageAlt} />
      <p>{children}</p>
    </Container>
  );
};
