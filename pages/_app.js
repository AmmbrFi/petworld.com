import '../styles/globals.css'
import 'react-notifications/lib/notifications.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '../next-seo.config'
import { Server, Client } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config
} from '@usedapp/core'

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/3c7cbb64ba0e47ddb6ba37b679f1ffa4'
  }
}

import { NotificationContainer } from 'react-notifications'

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
        <NotificationContainer />
      </DAppProvider>
    </>
  )
}

export default MyApp
