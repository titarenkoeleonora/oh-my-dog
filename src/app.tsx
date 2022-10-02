import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Main } from './components/shared/Main/Main';
import { PageTitle } from './components/shared/PageTitle/PageTitle';
import { UploadPage } from './components/UploadPage/UploadPage';
import { AppProvider } from './context/AppContext';
import { GlobalStyles } from './ui/styles';
import { theme } from './ui/styles/theme';

const ResultPage = React.lazy(() =>
  import('./components/ResultPage/ResultPage').then((module) => ({ default: module.ResultPage })),
);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider>
        <Main>
          <PageTitle />
          <UploadPage />
          <ResultPage />
        </Main>
      </AppProvider>
    </ThemeProvider>
  );
};
