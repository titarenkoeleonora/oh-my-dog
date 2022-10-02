import { styled } from '../../../ui/theme';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

export const Picture = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;