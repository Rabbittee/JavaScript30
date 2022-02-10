module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(100%)',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(100%)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(50%)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
