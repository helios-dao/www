module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-yellow': 'rgba(254, 218, 62, 0.41)',
        yellow: '#FEDA3E',
        'dark-blue': '#14304D',
      },
      width: {
        '800': '800px',
      },
      backgroundImage: {
        'yellow-gradient': 'radial-gradient(circle closest-side, rgb(252, 224, 79), rgb(255, 255, 255))'
      }
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
      serif: ['Lexend', 'serif'],
    },
  },
  plugins: [],
}