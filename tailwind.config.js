/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          50: '#FFFFFF',
          100: '#FAF7F2',
          200: '#F5EFE6',
          300: '#EDE4D6',
        },
        beige: {
          DEFAULT: '#E9DFD1',
          50: '#F9F6F2',
          100: '#F3EDE4',
          200: '#E9DFD1',
          300: '#DAC7B2',
          400: '#C7AE91',
        },
        brown: {
          DEFAULT: '#382B25',
          light: '#523F36',
          muted: '#715B50',
          dark: '#241B17',
          900: '#18120F',
        },
        gold: {
          DEFAULT: '#C5A16A',
          light: '#DFCA9B',
          dark: '#A6804A',
          shimmer: '#E8D4AE',
          50: '#FAF5EC',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(56, 43, 37, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(56, 43, 37, 0.16)',
        'gold-glow': '0 4px 20px -2px rgba(197, 161, 106, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
