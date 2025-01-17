/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#578E7E',
        secondary: '#F5ECD5',
        accent: '#FFFAEC',
        likeblack: '#3D3D3D',
      },
      fontFamily: {
        // lato: ['Lato', 'sans-serif'],
        // sans: ['Poppins', 'sans-serif'],
        // sans: ['Baloo Thambi 2', 'sans-serif'],
        sans: ['"Baloo Thambi 2"', 'cursive'], 

      },
    },
  },
  plugins: [],
}
