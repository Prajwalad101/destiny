/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      colors: {
        primaryred: '#F55A5A',
        secondarytext: '#4E4E4E',
      },
      backgroundImage: {
        'main-img': "url('/images/img.jpg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-notlast', '&>*:not(:last-child)');
    },
  ],
};
