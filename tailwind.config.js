/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue"
    ],
    theme: {
      screens: {
        '3xl': { max: '1750px' },
        '2xl': { max: '1549px' },
        'xl':  { max: '1349px' },
        'lg':  { max: '1199px' },
        'md':  { max: '991px' },
        'sm':  { max: '767px' },
        'xs':  { max: '599px' },
        '2xs': { max: '450px' }
      },
      extend: {
        keyframes: {
          fullpulse: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
          }
        },
        animation: {
          fullpulse: 'fullpulse 2s ease-in-out infinite',
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#000',
              a: {
                color: '#3182ce',
                '&:hover': {
                  color: '#2c5282',
                },
              },
            },
          },
        },
        backgroundImage: {
          'select':        `url("data:image/svg+xml,%3Csvg width='36' height='46' viewBox='0 0 36 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='36' height='45.0952' fill='white'/%3E%3Cpath d='M14 20.2759L17.5355 24.364L21.0711 20.2759' stroke='%2314387F' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          'bracket-left':  `url("data:image/svg+xml,%3Csvg width='53' height='31' viewBox='0 0 53 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1' y1='31' x2='1' stroke='%23006FA3' stroke-width='2'/%3E%3Cline y1='1' x2='53' y2='1' stroke='%23006FA3' stroke-width='2'/%3E%3C/svg%3E%0A")`,
          'bracket-right': `url("data:image/svg+xml,%3Csvg width='53' height='31' viewBox='0 0 53 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='52' x2='52' y2='31' stroke='%23006FA3' stroke-width='2'/%3E%3Cline x1='53' y1='30' y2='30' stroke='%23006FA3' stroke-width='2'/%3E%3C/svg%3E%0A")`,
        },
        fontSize: {
          '2xl': ['var(--text-2xl)', {
            lineHeight: '0.77em',
            // letterSpacing: '-0.02em',
          }],
          '2xls': ['var(--text-2xls)', {
            lineHeight: '0.77em',
            // letterSpacing: '-0.02em',
          }],
          'xl': ['var(--text-xl)', {
            lineHeight: '1.1em',
          }],
          'lgs': ['var(--text-lg)', {
            lineHeight: '1.2em',
          }],
          'lg': ['var(--text-lg)', {
            lineHeight: '1.2em',
          }],
          'md': ['var(--text-md)', {
            lineHeight: '1.2em',
          }],
          'sm': ['var(--text-sm)', {
            lineHeight: '1.2em',
          }],
          'base': ['var(--text-base)', {
            lineHeight: '1.2em',
          }],
          'xs': ['var(--text-xs)', {
            lineHeight: '1.2em',
            // letterSpacing: '0.1em',
          }],

        },
        colors: {
            'white': '#FFFFFF',
            'black': '#000000',
            'dgray': '#909090',
            'lgray': '#d5d5d5',
            'lgray2': '#A6A6A6',
            'transparent': 'transparent',
        },
        fontFamily: {
          poppins: ['poppins', 'sans-serif'],
          amsterdam: ['amsterdam', 'sans-serif'],
        },
      },
    },
    plugins: [ 
      // require('@tailwindcss/typography'),
    ],
  }