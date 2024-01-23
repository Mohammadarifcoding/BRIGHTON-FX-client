/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  

  theme: {
    screens: {
     xsm:'420px',
     sxm:'320px',
     sm: '480px',
     md: '768px',
     lg: '976px',
     xl: '1440px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

