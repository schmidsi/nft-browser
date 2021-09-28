import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://storage.googleapis.com/graph-fonts/EuclidCircular/fonts.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=e71b07ff-2691-45dc-980f-cf6c0aad37b6"
          >
            {' '}
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
