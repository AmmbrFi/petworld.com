import React from 'react'
import {
  Rinkeby,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config
} from '@usedapp/core'

import { useContract } from '../contract'
import { Button } from 'baseui/button'
import { NotificationManager } from 'react-notifications'

const BuyForm = ({ asset, saleDetails }) => {
  const { activateBrowserWallet, account, active } = useEthers()
  const [loading, setLoading] = React.useState(false)
  const { name, assetId, finalPrice } = asset
  const price = saleDetails.length > 0 ? saleDetails[1].toString() : finalPrice
  const count =
    saleDetails.length > 0 ? parseInt(saleDetails[2].toString(), 10) : 1

  const { buyToken } = useContract()

  const handleBuy = async () => {
    setLoading(true)
    try {
      await activateBrowserWallet()

      if (!account) {
        NotificationManager.warning(
          'You are not connected to any wallet.',
          'Connect Wallet'
        )
        setLoading(false)
        return
      }

      await buyToken(assetId, price)

      NotificationManager.success(
        'Congratulation! successfully completed',
        name
      )
    } catch (e) {
      NotificationManager.error('Something went wrong. Please try again!')
      console.log('e', e)
    }
    setLoading(false)
  }

  if (count > 0) {
    return (
      <Button
        kind={'secondary'}
        shape={'pill'}
        onClick={handleBuy}
        isLoading={loading}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              backgroundColor: '#f08a4b',
              color: 'white'
            })
          }
        }}>
        Buy Now
      </Button>
    )
  }

  return <Button kind={'secondary'}>Sold out</Button>
}

export default BuyForm
