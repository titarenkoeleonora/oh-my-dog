import loaderImage from '../../../images/loader.gif';
import { Image } from '../Image/Image';
import { Container } from './Loader.styles';

export const Loader = (): JSX.Element => (
  <Container>
    <Image src={loaderImage} width="250" height="250" alt="Loading..." />
    Loading...
  </Container>
);
