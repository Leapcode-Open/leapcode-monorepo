module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-main': '#ebf4ff',
        newblue: {
          100: '#F4F8FC',
          200: '#CDF2FC',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#0066f5',
          900: '#022B69',
        }
      }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
