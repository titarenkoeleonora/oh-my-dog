import { css } from 'styled-components';

import { styled } from '../../../ui/styles';

export const Container = styled.div(
  ({ theme }) => css`
    position: fixed;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.black40};
  `,
);

export const Dialogue = styled.div(
  ({ theme }) => css`
    position: relative;
    z-index: 111111;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 600px;
    background-color: ${theme.colors.lightBlue};
    border: 2px solid ${theme.colors.blue};
    border-radius: 10px;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: calc(100% - 40px);
      height: 450px;
    }
  `,
);

export const Image = styled.img`
  margin-bottom: 20px;
  flex-grow: 1;
  max-width: calc(100% - 10px);
  max-height: calc(100% - 50px);
  object-fit: contain;
`;

export const Footer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;
