// eslint-disable-next-line no-use-before-define
import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="mask-icon" href="/img/icon-512.png" color="#FAFAFA" />

          <meta httpEquiv="x-ua-compatible" content="IE=edge, chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="handheldFriendly" content="true" />
          <meta name="theme-color" content="#334BC8" />
          <meta name="msapplication-TileColor" content="#334BC8" />
          <meta name="google" content="notranslate" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript"> </script>
        </body>
      </Html>
    );
  }
}
