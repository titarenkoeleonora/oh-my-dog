import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Main } from './components/shared/main';
import { AppProvider } from './context/app-provider';
import { GlobalStyles } from './ui/theme'
import { theme } from './ui/theme/theme';
import { UploadPage } from './components/uploadPage';
import { Header } from './components/shared/header';

const ResultPage = React.lazy(() => import('./components/resultPage')
  .then(module=>({ default: module.ResultPage })));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider>
        <Main>
          <Header />
          <UploadPage />
          <ResultPage />
        </Main>
      </AppProvider>
    </ThemeProvider>
  );
}
