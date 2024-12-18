/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


export default {
  darkMode: 'class', 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
  
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
          lexend: ["Lexend", "sans-serif"],
          arvo: ["Arvo", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          outfit: ["Outfit", "sans-serif"],
      }
    },

    
    plugins: [],
  }