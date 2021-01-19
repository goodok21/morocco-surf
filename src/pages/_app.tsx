import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import muiTheme from '../muiTheme';
import GlobalStyle from '../components/GlobalStyle';

const CustomApp = (props: AppProps)  => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StylesProvider>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={muiTheme}>
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
}

export default CustomApp