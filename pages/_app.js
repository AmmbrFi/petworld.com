import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '../next-seo.config'
import { Server, Client } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
import {
  Rinkeby,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config
} from '@usedapp/core'

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]:
      'https://rinkeby.infura.io/v3/f89f161fa7a34202930ba0ae5f52de5f'
  }
}

function MyApp({ Component, pageProps }) {
  const engine = typeof window === 'undefined' ? new Server() : new Client()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DAppProvider config={config}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <DefaultSeo {...SEO} />

            <Component {...pageProps} />
          </BaseProvider>
        </StyletronProvider>
      </DAppProvider>
    </>
  )
}

export default MyApp
