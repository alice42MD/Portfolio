/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        // foreground: "var(--foreground)",
        primary: "rgb(var(--primary))",
        shadowColor: "rgba(var(--shadowColor))",
      },
      dropShadow: {
        shadow: '1px 1px 2px rgb(var(--shadowColor))'
      },
      opacity: {
        myOpacity: 'var(--myOpacity)'
      }
    },
  },
  plugins: [],
} 