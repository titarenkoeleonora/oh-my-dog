import { FC, ReactNode } from "react";
import { Container, Image, Text } from "./styles";
import errorImage from '../../../images/pug-bread.png'

type Props = {
  children: ReactNode,
};

const Error: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Image src={errorImage} />
      <Text>
        { children }
      </Text>
    </Container>
  );
};

export default Error;