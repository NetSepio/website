/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          cyan: '#08d9c5',
          green: '#11D9C5',
          darkgreen: '#0a8074',
          dark: '#040a20',
        },
        void: '#020608',
        panel: '#060f14',
        neon: '#00ffe1',
        ember: '#ffb454',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'blink': 'blink 1.6s step-end infinite',
        'scan': 'scan 7s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.15' },
        },
        scan: {
          '0%': { top: '-15%' },
          '100%': { top: '115%' },
        },
      }
    },
  },
  plugins: [],
};
