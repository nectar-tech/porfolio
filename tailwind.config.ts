/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f8f8f6',
        brandOrange: '#cd7542',
        mainText: '#1a1a1a',
        muted: '#646464',
        brandBorder: 'rgba(205, 117, 66, 0.18)',
        cardBg: '#f4f2ec',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.65s ease both',
        fadeUpDelayed: 'fadeUp 0.65s ease 0.12s both',
      }
    },
  },
  plugins: [],
}