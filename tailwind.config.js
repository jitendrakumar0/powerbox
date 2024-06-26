module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1110px',
        '2xl': '1110px',
      }
    },
    extend: {
      colors : {
        theme1: '#4ba6bb',
        theme2: '#000',
        theme3: '#8492a6'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}