/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Slab"', 'Georgia', 'serif'],
      },
      colors: {
        google: {
          blue: '#4285f4',
          red: '#ea4335',
          yellow: '#fbbc05',
          green: '#34a853'
        },
        amazon: {
          orange: '#ff9900',
          blue: '#232f3e'
        },
        microsoft: {
          blue: '#0078d4',
          green: '#107c10',
          red: '#d13438',
          yellow: '#ffb900'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            strong: {
              color: '#111827',
            },
            code: {
              color: '#111827',
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
