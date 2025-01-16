/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#483d89',
        secondary: '#bc8fe5',
        accent: '#f8f1fa',
        likeblack: '#7b7c94',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        // sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
