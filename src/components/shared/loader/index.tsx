import loaderImage from '../../../images/loader.gif';

import { Container, Image } from './styles';

export const Loader = (): JSX.Element => (
  <Container>
    <Image src={loaderImage} />
    Loading...
  </Container>
);
