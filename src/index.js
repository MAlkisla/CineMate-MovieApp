import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';

import App from './components/App';

const theme = createTheme({});
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <ThemeProvider theme={theme}>
    <StylesThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StylesThemeProvider>
  </ThemeProvider>
);
