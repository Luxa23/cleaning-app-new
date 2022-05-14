import '../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    display: grid;
    grid-template-rows:  1fr 4rem;
  }
  #__next {
    display: contents;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
