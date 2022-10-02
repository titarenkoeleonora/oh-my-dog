import { FC, ReactNode } from 'react';

import pugBread from '../../../images/pug-bread.png'
import pugQuestions from '../../../images/pug-questions.png'
import { Container, Image } from './styles';

interface Properties {
  children: ReactNode,
  type?: string,
};

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

export const Error: FC<Properties> = ({ children, type = 'serverError' }): JSX.Element => (
  <Container>
    <Image src={getImage(type)} />
    <p>
      {children}
    </p>
  </Container>
);