/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#edf2f8',
        'secondary-color': '#313bac',
        'black-color': '#030303',
        'lightGray-color': '#e4e4e4',
        'gray-color': '#6b7688',
        'brown-color': '#46364a',
        'white-color': '#ffffff',

        // dark mode

        'dark-bg': 'hsl(216,28%,7%)',
        'secondary-bg': 'hsl(216,28%,9%)',
        'light-dark-bg': '#161b22',
        'yellow-bg': '#ffd438',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
