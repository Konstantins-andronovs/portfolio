/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {

      
      extend: {
        // Adds a new breakpoint in addition to the default breakpoints
        screens: {
          '3xl': '1600px',
        },
        colors: {
          'primary': {
            // 50: '#c2c7d6',
            // 100: '#e0e3eb',
            // 150: '#a3abc2',
            // 200: '#8892b0',
            // 300: '#7581a3',
            // 400: '#5c678a',
            // 500: '#47506b',
            // 600: '#33394d',
            // 700: '#13599e',
            // 800: '#1f222e',
            // 900: '#0a0b0f',
            // DEFAULT: '#1976d2', //500
            // 'on': '#f4f8fd',    //50  
            // 'dark': {
            //   DEFAULT: '#a3c8ed', //300
            //   'on': '#0f477e',    //800  
            // }
          },
          // 'secondary': {
          //   50: '#e9edfb',
          //   100: '#ccd6f6',
          //   150: '#a8b9f0',
          //   200: '#7d96e8',
          //   300: '#5273e0',
          //   400: '#2650d9',
          //   500: '#1f40ad',
          //   600: '#173082',
          //   700: '#0f2057',
          //   800: '#08102b',
          //   900: '#000000',
          // },
          // 'accent': {
          //   50: '#e6fcff',
          //   100: '#ccf9ff',
          //   200: '#99f3ff',
          //   300: '#66edff',
          //   400: '#33e7ff',
          //   500: '#00dffc',
          //   600: '#00b4cc',
          //   700: '#008799',
          //   800: '#005a66',
          //   900: '#002d33',
          // }
        },
      }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
