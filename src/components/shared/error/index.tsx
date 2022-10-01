import { FC, ReactNode } from 'react';
import { Container, Image } from './styles';
import pugBread from '../../../images/pug-bread.png'
import pugQuestions from '../../../images/pug-questions.png'

type TProps = {
  children: ReactNode,
  type?: string,
};

const getImage = (type: string) => {
  switch (type) {
    case 'serverError':
      return pugBread;
    case 'validationError':
      return pugQuestions;
  
    default:
      break;
  }
};

const Error: FC<TProps> = ({ children, type = 'serverError' }) => {
  return (
    <Container>
      <Image src={getImage(type)} />
      <p>
        {children}
      </p>
    </Container>
  );
};

export default Error;