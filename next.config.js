module.exports = {
  future: {
    webpack5: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    apiKey: process.env.API_KEY,
    salesContract: process.env.SALES_CONTRACT
  },
  target: 'serverless',
  reactStrictMode: true
}
