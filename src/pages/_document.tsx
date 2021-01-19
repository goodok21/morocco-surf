import React from 'react';
import { ServerStyleSheet } from 'styled-components'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/styles';

import theme from '../muiTheme';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles:
        [
          ...React.Children.toArray(initialProps.styles),
          materialSheets.getStyleElement(),
          styledComponentsSheet.getStyleElement(),
        ],
    
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument
