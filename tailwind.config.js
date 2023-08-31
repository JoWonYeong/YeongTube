/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'logo-red': '#ff0000',
        
        'dark-bg': '#0f0f0f',
        'dark-text-color': '#f1f1f1',
        'dark-text-info-gray': '#aaaaaa',
        'dark-bg-gray': '#272727',
        
        'info-gray': '#606060',
        'bg-gray': '#f2f2f2',
      },
    },
    backgroundImage: {
      folding: "url('/src/icon/folding.svg')",
    },
  },
  plugins: [],
};

