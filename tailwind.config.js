/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'headerBg': '#FAF7F2', 
      'yellowAccent': '#FAF7F2', 
      'Yellow': '#FDC913',
      'yellowBg': '#FDC911',
      'midnight': '#292929',
      'white': '#FFFFFF',
      'gray': '#666666',
      'Red': '#CE2829',
      'bubble-gum': '#FAF7F2',
      'bermuda': '#78dcca',
    },
    extend: {
      daisyui: {
        themes: ['light'],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
}
