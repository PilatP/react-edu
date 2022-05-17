import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { ComponentType } from 'react';
import theme from '@themes';

export const themeWrapper = (
  component: JSX.Element | ComponentType
): JSX.Element => {
  return <ThemeProvider theme={theme}>{component}</ThemeProvider>;
};

const renderWithTheme = (component: JSX.Element | ComponentType) => {
  return render(themeWrapper(component));
};

export { renderWithTheme as render };
