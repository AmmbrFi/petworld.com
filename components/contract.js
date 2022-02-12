import getConfig from 'next/config'
import { ethers } from 'ethers'
import { useEthers } from '@usedapp/core'

const { publicRuntimeConfig } = getConfig()

const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      }
    ],
    name: 'buyToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      }
    ],
    name: 'getAsks',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

export const useContract = () => {
  const { library, account } = useEthers()

  const buyToken = async (tokenId, price) => {
    try {
      const contract = new ethers.Contract(
        publicRuntimeConfig.salesContract,
        abi,
        library.getSigner(account)
      )
      const gas = await library.getGasPrice()
      const options = {
        value: price,
        gasPrice: gas.toString(),
        gasLimit: 9000000
      }

      await contract.buyToken(tokenId, options)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
  return { buyToken }
}
