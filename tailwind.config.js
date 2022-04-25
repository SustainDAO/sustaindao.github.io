module.exports = {
    purge: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.html',
      './*.html'
    ],
    darkMode: 'class',
    theme: {
      minWidth: {
        '0': '0',
        'full': '100%',
        '34': '8.5rem',
        '36': '9rem',
        '39': '9.75rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '49': '12.25rem',
        '51': '13.75rem',
        '56': '14rem',
        '64': '16rem',
        '75': '18.75rem',
        '84': '21rem',
        '98': '24.5rem',
        'fit': 'fit-content',
      },
      minHeight: {
        '0': '0',
        '4/5': '80%',
        'full': '100%',
        'screen': '100vh',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '26': '6.5rem',
        '27': '7rem',
        '48': '12rem',
        '54': '14rem',
        '76': '19rem',
        '70': '18rem',
        '100': '25rem',
        '140': '35rem',
        '178': '45rem',
      },
      maxWidth: {
        'xs': '20rem',
        'sm': '30rem',
        'lsm': '35rem',
        'md': '40rem',
        'lg': '50rem',
        'xl': '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        'full': '100%',
      },
      maxHeight: {
        '0': '0px',
        'full': '100%',
        'screen': '100vh',
        '14': '3.5rem',
        '48': '12rem',
      },
      screens: {
        'xsm': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px',
        '2xl': '1536px',
      },
      fontSize: {
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '4.5xl': '2.5rem', // 40px
        '5xl': '3rem', // 48px,
      },
    },
    variants: {
      extend: {}
    },
    plugins: []
  }