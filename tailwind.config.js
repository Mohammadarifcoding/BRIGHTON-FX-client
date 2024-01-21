/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  

  theme: {
    screens: {
     xsm:'420px',
     sxm:'320px'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

