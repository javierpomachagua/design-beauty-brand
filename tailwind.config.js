module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        playfair: "Playfair Display, serif",
      },
      colors: {
        app: {
          primary: '#001F40',
          contrastPink: '#FEE8EC'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
