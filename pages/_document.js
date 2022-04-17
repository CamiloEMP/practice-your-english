import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-body">
        <Main />
        <NextScript />
        <div id="modal-success" />
      </body>
    </Html>
  )
}
