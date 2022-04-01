module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robo: ['Roboto'],
        bebas: ['Bebas Neue'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
