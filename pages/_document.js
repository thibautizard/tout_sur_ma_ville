// In _document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
// import { ServerStyleSheet } from "styled-components";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}