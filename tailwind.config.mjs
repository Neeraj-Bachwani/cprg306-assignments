/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'electric-violet': {
          '50': '#f6f3ff',
          '100': '#eeeafd',
          '200': '#e0d7fd',
          '300': '#c9b7fb',
          '400': '#af8ef7',
          '500': '#9660f2',
          '600': '#873fe8',
          '700': '#823cd7',
          '800': '#6525b2',
          '900': '#542092',
          '950': '#341263',
        },
      },
    },
  },
  plugins: [],
};
