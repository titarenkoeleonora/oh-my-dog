import { ThemeProvider } from 'styled-components';
import DragAndDrop from './components/dragAndDrop';
import Main from "./components/shared/main";
import { AppProvider } from './context/appProvider';
import { GlobalStyles } from './ui/theme'
import { theme } from './ui/theme/theme';
import UploadPage from './components/uploadPage';
import ResultPage from './components/resultPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider>
        <Main>
          <UploadPage />
          <ResultPage />
        </Main>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;