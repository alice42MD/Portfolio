import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
      cursor: {
        default: 'url(/cursorDefault.svg), default',
        pointer: 'url(/cursorPointer.svg), pointer',
      },
    },
  },
  plugins: [],
} satisfies Config;
