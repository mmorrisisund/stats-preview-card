module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: { min: '375px' },
    },
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'transparent-white-50': 'hsla(0, 0%, 100%, 0.75)',
        'transparent-white-100': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        Inter: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        Lexend: [
          'Lexend Deca',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      fontSize: {
        base: '15px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
