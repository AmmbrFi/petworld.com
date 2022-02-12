import React from 'react'
import {
  Rinkeby,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config
} from '@usedapp/core'

import { useContract } from '../contract'

const BuyForm = ({ asset }) => {
  const { activateBrowserWallet, account } = useEthers()
  const { assetId, price } = asset
  const { buyToken } = useContract()

  const handleBuy = async () => {
    try {
      await activateBrowserWallet()
      await buyToken(assetId, price)
    } catch (e) {}
  }

  return (
    <button
      className="bg-orange font-bold py-3 px-5 text-white rounded-lg"
      onClick={handleBuy}>
      Buy Now
    </button>
  )
}

export default BuyForm
