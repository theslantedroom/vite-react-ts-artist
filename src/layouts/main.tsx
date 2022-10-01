import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MobileWrapper } from './MobileWrapper';
import { GlobalContextProvider } from '../contexts/global/GlobalContext';
import { MuiThemeProvider } from '../theme/MuiThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  // <React.StrictMode>
  <GlobalContextProvider>
    <CssBaseline />
    <MuiThemeProvider>
      <MobileWrapper>
        <App />
      </MobileWrapper>
    </MuiThemeProvider>
  </GlobalContextProvider>
  // </React.StrictMode>
);
