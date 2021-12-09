import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link href="https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Aedit%3A" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
