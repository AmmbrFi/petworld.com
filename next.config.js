module.exports = {
  future: {
    webpack5: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    apiKey: process.env.API_KEY
  },
  target: 'serverless',
  reactStrictMode: true
}
