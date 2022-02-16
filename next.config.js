module.exports = {
  future: {
    webpack5: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    apiKey: process.env.API_KEY,
    salesContract: '0xAD7F825cba0Cf6F32e97166EC44aF10c7A6B1928',
    tokenAddress: '0x6dB7ED2282D98aaBFa1b6F3d0a94e0dCdcdBB9A2',
    rpc: 'https://mainnet.infura.io/v3/3c7cbb64ba0e47ddb6ba37b679f1ffa4'
  },
  target: 'serverless',
  reactStrictMode: true
}
