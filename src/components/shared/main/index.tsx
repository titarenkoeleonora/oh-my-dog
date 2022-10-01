import { styled } from "../../../ui/theme";
import backgroundImage from '../../../images/dogs-background.png';

const Main = styled.main`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
`;

export default Main;