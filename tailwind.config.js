/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'medium-gray': '#7C8798',
        'light-gray': '#969FAD',
        'light-dark-blue': '#262E38',
        'orange': '#FC7614',
        'dark-blue': '#131518',
        'block-bg-color': 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)'
      },
    },
    screens: {
      xl: '1430px'
    },
    fontFamily: {
      overpass: 'Overpass'
    },
    
  },
  plugins: [],
}

// start:17:00
