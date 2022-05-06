import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />

          {/* Facebook */}
          <meta property="og:title" content="Nirmala Meulens Portfolio" />
          <meta property="og:description" content="Welcome to Nirmala Meulens portfolio website" />
          <meta property="og:site_name" content="Nirmala Meulens Portfolio" />
          <meta property="og:url" content="www.nmeulens.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@nmeulens" />
          <meta name="twitter:title" content="Nirmala Meulens Portfolio" />
          <meta name="twitter:description" content="Welcome to Nirmala Meulens portfolio website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
