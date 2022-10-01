import { ThemeProps as StyledThemeProps } from 'styled-components'
import { ThemedProps as OwnThemedProps, Theme as OwnTheme } from './theme'

export { GlobalStyles } from './globalStyles';
export { styled } from './styled';
export { theme } from './theme';
export type ThemeProps<T> = StyledThemeProps<T>
export type ThemedProps<P> = OwnThemedProps<P>
export type Theme = OwnTheme