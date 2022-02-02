module.exports = {
  future: {
    webpack5: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL
  },
  target: 'serverless',
  reactStrictMode: true
}
