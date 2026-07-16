/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#4C1D95',
          800: '#4338CA',
          700: '#5B21B6',
          600: '#6D28D9',
        },
        brand: {
          blue: '#8B5CF6',
          cyan: '#A78BFA',
          light: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
        'serif-role': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'gradient': 'gradientMove 8s ease infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4C1D95, #4338CA)',
        'grid': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
