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
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Poki" />
          <meta
            name="description"
            content="All the Pokémon data you'll ever need in one place, easily accessible through a modern UI 

"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Poki" />
          <meta
            property="og:description"
            content="All the Pokémon data you'll ever need in one place, easily accessible through a modern UI "
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Poki" />
          <meta
            property="twitter:description"
            content="All the Pokémon data you'll ever need in one place, easily accessible through a modern UI "
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          {/* font  */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sarpanch:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <style jsx global>
            {`
              body {
                font-family: "Sarpanch", " sans-serif" !important;
              }
            `}
          </style>
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
