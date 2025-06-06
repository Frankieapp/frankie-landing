import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAA1YQUtNa01j3aLeRoOmWDje13ADKRrnw&libraries=places"
          async
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
