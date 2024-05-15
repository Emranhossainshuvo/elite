/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-bg': '#F5F8FC',
      'custom-text': '#050A13',
      'custom-sp': '#C16AD5',
      'custom-crd': '#4B7DCD'
    },
  },
  plugins: [require("daisyui")],
}

