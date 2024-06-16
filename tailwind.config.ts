import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-spotify': '#121212',
        'gray-text': '#b3b3b3',
        'green-spotify': '#1ed761',
        'blue-coldplay': '#060b28',
      },
      fontFamily: {
        custom: ['Circular', 'sans-serif'],
      },
      spacing: {
        '218': '13.625rem',
      },
    },
  },
  plugins: [],
}
export default config
