/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#669295',   
        secondary: '#cfe1e5', 
        accent: '#cfe1e5',  
        likeblack: '#283737',
      },
    },
  },
  plugins: [],
}

