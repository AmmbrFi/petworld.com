import Document, { Head, Html, Main, NextScript } from 'next/document'

import getConfig from 'next/config'

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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png?v=5"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png?v=5"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png?v=5"
          />
          <link rel="manifest" href="/favicons/site.webmanifest?v=5" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg?v=5"
            color="#f08a4b"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico?v=5" />
          <meta name="apple-mobile-web-app-title" content="Global Pet World" />
          <meta name="application-name" content="Global Pet World" />
          <meta name="msapplication-TileColor" content="#f08a4b" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml?v=5"
          />
          <meta name="theme-color" content="#ffffff" />

          <script type="text/javascript" src="/fbscript.js"></script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=291080139627957&ev=PageView&noscript=1"
            />
          </noscript>
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
