import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

/*
 * База для конечного билда
 * Здесь может быть подключение дополнительных CDN со шрифтами
 * Здесь просходит формирование конечного документа
 */
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
