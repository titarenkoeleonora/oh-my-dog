import { styled } from '../../../ui/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Form = styled.form<{dragActive: boolean}>`
  position: relative;
  margin-bottom: 30px;
  width: 450px;
  height: 250px;
  text-align: center;
  background-color: ${({ theme, dragActive }) => dragActive ? theme.colors.white : theme.colors.lightBlue};
  border: 2px dashed ${({ theme }) => theme.colors.blue};
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: none;
  background-color: transparent;
  text-decoration-line: underline;

  &:hover {
    text-decoration-line: none;
  }
`;