/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'logo-red': '#ff0000',
        'logo-red':'rgb(var(--color-logo-red))',
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

