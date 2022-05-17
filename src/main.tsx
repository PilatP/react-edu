import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '@themes';
import 'reset-css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
  }
`;

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
