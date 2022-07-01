module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#71717a',
        primary: '#3b82f6',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#e11d48',
      },
    },
  },
  plugins: [],
};
