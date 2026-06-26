import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#faf9f4',
        'cream-alt': '#f8f8f6',
        orange: {
          DEFAULT: '#cd7542',
          hover: '#b85f30',
          light: 'rgba(205, 117, 66, 0.07)',
          mid: 'rgba(212, 106, 45, 0.53)',
          border: 'rgba(205, 117, 66, 0.2)',
        },
        dark: '#1a1a1a',
        muted: '#646464',
        accent: '#C1693A',
      },
      fontSize: {
        'hero': 'clamp(36px, 6vw, 72px)',
        'card-title': 'clamp(24px, 3vw, 40px)',
        'section-title': 'clamp(32px, 5vw, 52px)',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tight2: '-0.02em',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
} satisfies Config
