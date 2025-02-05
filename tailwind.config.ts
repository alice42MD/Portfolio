import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nostagia: ['var(--font-nostalgia)']
      },
      colors: {
        background: "rgb(var(--background))",
        primary: "rgb(var(--primary))",
        shadowColor: "rgba(var(--shadowColor))",
      },
      dropShadow: {
        shadow: '1px 1px 5px rgb(var(--shadowColor))'
      },
      opacity: {
        myOpacity: 'var(--myOpacity)'
      }
    },
  },
  plugins: [],
} satisfies Config;
