/*===============================================
=          Kodet af Tobias           =
===============================================*/


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prime-orange": "#db6439",
        "sec-orange": "#ffa463",
        "background": "#fffef5",
        "prime-brown": "#3d3030",
        "off-white": "#fbfbf4",
        "off-black": "#222222",
        "cancel-red": "#dd3939",
      },
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        "bebas": ["bebas", "sans-serif"],
        "mont": ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

