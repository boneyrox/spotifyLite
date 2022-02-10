module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '89': '89%',
      },
      maxWidth: {
        '240': '240px',
      },
      colors: {
        '10B981': '#10B981',
        'F3F4F6': '#F3F4F6',
        'F9FAFB': '#F9FAFB',
      },
      fontFamily: {
         'Inter': ['Inter', 'sans-serif'],
      }
  
    },
  },
  plugins: [],
}