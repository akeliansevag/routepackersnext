const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-rp': '#0F8BCF',
        'yellow-rp': '#FBBC1E',
        'black-rp': '#16161E',
        'gray-rp': '#313138'
      },
    },
  },
  plugins: [],
})