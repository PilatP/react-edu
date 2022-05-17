import 'styled-components';
import { Breakpoints } from './models';

type ColorTypes = 'primary' | 'border' | 'white' | 'grey';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ColorTypes, string>;
    up: (breakpoint: Breakpoints) => string;
    down: (breakpoint: Breakpoints) => string;
    between: (minBreakpoint: Breakpoints, maxBreakpoint: Breakpoints) => string;
  }
}
