module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}" ,
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1440: "1440px",
      },
      colors: {
        blue: {
          DEFAULT: '#7599FF'
        }
      }
    },
  },
  plugins: [],
}
