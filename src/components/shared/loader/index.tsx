import { Container, Image } from './styles';
import loaderImage from '../../../images/loader.gif';

const Loader = () => {
  return (
    <Container>
      <Image src={loaderImage} />
      Loading...
    </Container>
  ); 
};

export default Loader;