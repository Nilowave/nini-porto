import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme/default';

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState(theme);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Component {...pageProps} setTheme={setSelectedTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
