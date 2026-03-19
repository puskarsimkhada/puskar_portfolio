/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add your custom Blue/Cyan from the screenshots here
        brandBlue: '#0070f3', 
        brandCyan: '#00dfd8',
      },
    },
  },
  plugins: [],
};