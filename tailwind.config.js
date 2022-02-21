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
        '600': '600px',
      }
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
      serif: ['Lexend', 'serif'],
    },
  },
  plugins: [],
}