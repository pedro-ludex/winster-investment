import Document, { Html, Head, Main, NextScript } from 'next/document'
import logo from '../public/logo1.png'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link sizes="180x180"  rel="shortcut icon" href={logo} />
          <link sizes="180x180"  rel="icon" href={logo} />
          <link
            rel="apple-touch-icon"
            sizes="90x90"
            href={logo}
          />
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