module.exports = {
  future: {
    webpack5: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    apiKey: process.env.API_KEY,
    salesContract: '0xFC4d808e3Ca378Bce3722B6ba3fb1aA6B86eD557',
    tokenAddress: '0x17DE79Da8aA5e96F3268FdAfd730Fdc5Ab1C8A45',
    rpc: 'https://rinkeby.infura.io/v3/f89f161fa7a34202930ba0ae5f52de5f'
  },
  target: 'serverless',
  reactStrictMode: true
}
