/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-bg': '#483D8B',
      'custom-text': '#D3D3D3',
      'custom-sp': '#FF4040',
      'custom-crd': '#191970'
    },
  },
  plugins: [require("daisyui")],
}

