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

const erc1155 = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'balanceOf',
    outputs: [
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
  const customHttpProvider = new ethers.providers.JsonRpcProvider(
    publicRuntimeConfig.rpc
  )

  const buyToken = async (tokenId, price) => {
    try {
      const contract = new ethers.Contract(
        publicRuntimeConfig.salesContract,
        abi,
        library.getSigner(account)
      )

      const gas = await contract.estimateGas.buyToken(tokenId, { value: price })

      const options = {
        value: price,
        gasPrice: gas.toString(),
        gasLimit: 9000000
      }

      const tx = await contract.buyToken(tokenId, options)
      await tx.wait()
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  const getAsks = async tokenId => {
    try {
      const contract = new ethers.Contract(
        publicRuntimeConfig.salesContract,
        abi,
        customHttpProvider
      )

      const res = await contract.getAsks(tokenId)
      return res
    } catch (e) {
      throw e
    }
  }

  const balanceOf = async (_account, tokenId) => {
    try {
      const contract = new ethers.Contract(
        publicRuntimeConfig.tokenAddress,
        erc1155,
        customHttpProvider
      )
      const balance = await contract.balanceOf(_account, tokenId)
      return formatEther(balance)
    } catch (e) {
      throw e
    }
  }

  return { buyToken, getAsks, balanceOf }
}
