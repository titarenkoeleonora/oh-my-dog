import { styled } from "../../ui/theme";

export const Container = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
`;