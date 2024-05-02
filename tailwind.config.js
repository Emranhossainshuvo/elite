/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-bg': '#F4E3D7',
      'custom-text': '#4A3933',
      'custom-sp': '#7E9363',
    },
  },
  plugins: [require("daisyui")],
}

