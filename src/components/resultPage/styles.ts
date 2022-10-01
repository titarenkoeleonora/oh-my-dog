import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;