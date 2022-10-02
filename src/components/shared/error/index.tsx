import { FC, ReactNode } from 'react';

import pugBread from '../../../images/pug-bread.png'
import pugQuestions from '../../../images/pug-questions.png'
import { Container, Image } from './styles';

interface Props {
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

export const Error: FC<Props> = ({ children, type = 'serverError' }): JSX.Element => {
  return (
    <Container>
      <Image src={getImage(type)} />
      <p>
        {children}
      </p>
    </Container>
  );
};
