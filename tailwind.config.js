/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#111113',
        muted: '#18181b',
        border: '#27272a',
        primary: '#c27aff',
        'primary-strong': '#ad46ff',
        'text-primary': '#fafaf9',
        'text-secondary': '#9f9fa9',
        'text-muted': '#71717b',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 20px 40px -30px rgba(114, 63, 230, 0.45)',
      },
    },
  },
  plugins: [],
}

