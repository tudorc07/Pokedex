module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      whiteSecondary: '#eee',
      red: '#ec5859',
      black: '#000',
    },

    animation: {
      float: 'float 3s infinite',
    },

    fontFamily: {
      architect: ['Architects Daughter'],
    },

    keyframes: {
      float: {
        '0%, 100%': {
          transform: 'translateY(0px)',
        },

        '50%': {
          transform: 'translateY(-20px)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
