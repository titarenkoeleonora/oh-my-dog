import backgroundImage from '../../../images/dogs-background.png';
import { styled } from '../../../ui/styles';

export const Main = styled.main`
  margin: 0 auto;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImage});
`;
