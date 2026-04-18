import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1440px' },
    },
    extend: {
      colors: {
        brand: {
          50: '#ECFAF5',
          100: '#D1F2E5',
          200: '#A3E5CB',
          300: '#6CD0AC',
          400: '#3FB68D',
          500: '#18A075',
          600: '#0E7C66',
          700: '#0B6353',
          800: '#0A4F44',
          900: '#08423A',
          950: '#042822',
        },
        warm: {
          50: '#FFF6EC',
          100: '#FFE7CC',
          200: '#FCCC97',
          300: '#F8AE63',
          400: '#F4A258',
          500: '#E58A3E',
          600: '#C8702A',
          700: '#9C551F',
          800: '#724019',
          900: '#4D2D14',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
        body: ['Inter', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.625rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)',
        pop: '0 8px 28px -4px rgb(0 0 0 / 0.10), 0 4px 10px -2px rgb(0 0 0 / 0.06)',
        ring: '0 0 0 4px rgb(24 160 117 / 0.18)',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'fade-in-up': 'fade-in-up 280ms ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(15 23 42)',
            '--tw-prose-headings': 'rgb(15 23 42)',
            '--tw-prose-links': '#0E7C66',
            '--tw-prose-bold': 'rgb(15 23 42)',
            '--tw-prose-quotes': 'rgb(71 85 105)',
            '--tw-prose-quote-borders': '#0E7C66',
            '--tw-prose-code': '#0E7C66',
            maxWidth: 'none',
            'h2,h3,h4': { scrollMarginTop: '6rem' },
            a: { textDecoration: 'underline', textUnderlineOffset: '3px' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgb(226 232 240)',
            '--tw-prose-headings': 'rgb(241 245 249)',
            '--tw-prose-links': '#6CD0AC',
            '--tw-prose-bold': 'rgb(241 245 249)',
            '--tw-prose-quotes': 'rgb(148 163 184)',
            '--tw-prose-quote-borders': '#3FB68D',
            '--tw-prose-code': '#6CD0AC',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};

export default config;
