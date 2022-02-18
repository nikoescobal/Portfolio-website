import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
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
      <Html lang='en-GB'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=M+PLUS+Code+Latin:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&family=Overpass+Mono:wght@300;400;500;600;700&family=Saira+Extra+Condensed:wght@300;400;500;600;700;800&family=Saira+Semi+Condensed:wght@300;400;500;600;700;800&family=Saira:wght@300;400;500;600;700;800&family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Trispace:wght@300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
