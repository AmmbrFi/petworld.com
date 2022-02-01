const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      serif: ['Fredoka One', ...defaultTheme.fontFamily.serif],
      mono: defaultTheme.fontFamily.mono
    },
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: '#F08A4B',
      green: colors.green,
      oranges: '#ff8c00'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100%',
      '16': '4rem'
    },
    extend: {}
  },
  plugins: []
}
