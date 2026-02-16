/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cobalt: '#1a3cff',
        electric: '#2f54ff',
        deep: '#0a0f2c',
        gold: '#f5c842',
        offwhite: '#f4f3ef',
        muted: '#8b8fa8',
        border: '#e2e4f0',
      },
      animation: {
        morphBlob: 'morphBlob 8s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        scrollPulse: 'scrollPulse 1.8s ease-in-out infinite',
      },
      keyframes: {
        morphBlob: {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' },
          '33%':       { borderRadius: '40% 60% 45% 55% / 60% 40% 55% 45%' },
          '66%':       { borderRadius: '55% 45% 60% 40% / 40% 55% 50% 60%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%':      { opacity: '0.4', transform: 'scaleY(0.7)' },
        },
      },
    },
  },
  plugins: [],
}