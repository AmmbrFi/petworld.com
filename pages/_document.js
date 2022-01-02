import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="text-white bg-gray-50 font-sans">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preload" as="image" href="/c-bg.png" />
          <link rel="preload" as="image" href="/footer-bg.png" />
          <link rel="preload" as="image" href="/mast-1.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
