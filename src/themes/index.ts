import { DefaultTheme } from 'styled-components';
import { Breakpoints } from './models';

const theme = {
  colors: {
    primary: '#5FAAE4',
    white: '#FFFFFF',
    border: '#CED4DA',
    grey: '#ADB5BD',
  },
  up: (breakpoint: Breakpoints) => `@media (min-width: ${breakpoint})`,
  down: (breakpoint: Breakpoints) => `@media (max-width: ${breakpoint})`,
  between: (minBreakpoint: Breakpoints, maxBreakpoint: Breakpoints) =>
    `@media (min-width: ${minBreakpoint}) and (max-width: ${maxBreakpoint})`,
} as DefaultTheme;

export default theme;
