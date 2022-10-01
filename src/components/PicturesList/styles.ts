import { styled } from "../../ui/theme";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
  /* overflow-y: auto; */

  @media screen and (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Picture = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;