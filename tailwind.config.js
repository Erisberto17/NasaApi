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
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ["Nunito Sans", 'sans-serif'],
        'icones': ['Icones']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.text-shadow': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
      },
      '.text-shadow-lg': {
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-none': {
        textShadow: 'none',
      },
    })
  }],
};
