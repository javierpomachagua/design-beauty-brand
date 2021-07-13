module.exports = {
  mode: 'jit',
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
          primaryLight: '#283144',
          secondary: '#FB8D9E',
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
