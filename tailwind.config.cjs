/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs : '14px', 
      sm : '16px', 
      md : '18px',
      lg :'20px',
      xl : '24px',
      '2xl' : '32px'
    },
    colors: {
      'transparent' : 'transparent',

      'black': '#000',
      'white': '#fff',

      gray :{
        900 : '#121214',
        800 : '#202024',
        400 : '#7c7c8a',
        200 : '#c4c4cc',
        100 : '#e1e1e6',
      },

      cyan : {
        500 : '#81d8f7',
        300 : '#9be1fb',
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
