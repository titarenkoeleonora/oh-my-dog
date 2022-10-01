import { ThemedStyledProps } from 'styled-components';

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    blue: '#00a8e9',
    lightBlue: '#f8fafc',
    darkBlue: '#3f51b5',
    grey: '#9E9E9E',
  },
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '960px',
  },
};

export type Theme = typeof theme;

export type ThemedProps<P> = ThemedStyledProps<P, Theme>;

