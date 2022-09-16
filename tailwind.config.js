module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        purple: '#C33CFF',
        pink: 'rgba(245, 86, 213, 0.1)'
      },
      width: {
        '800': '800px',
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(180deg, transparent 0%, rgba(249, 41, 160, 0.3) 50%, transparent 100%)',
        'blue-gradient': 'linear-gradient(180deg, transparent 0%, rgba(14, 194, 252, 0.3) 50%, transparent 100%)',
        'purple-gradient': 'linear-gradient(180deg, rgba(195, 60, 255, 0.3) 0%, transparent 100%)',
        'purple-gradient-inverted': 'linear-gradient(180deg, transparent 0%, rgba(195, 60, 255, 0.3) 100%)'
      }
    },
    fontFamily: {
      sans: ['Cooper Hewitt', 'sans-serif'],
      serif: ['serif'],
    },
  },
  plugins: [],
}